import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { User } from './entities/User.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { LoginCredentialsDto } from './dto/login-credentials.dto';
import { JwtService } from '@nestjs/jwt';
import { UserRoleEnum } from '../enums/user-role.enum';
import { UserSubscribeDto } from './dto/user-subscribe.dto';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}
  async register(userData: UserSubscribeDto): Promise<Partial<User>> {
    const user = this.userRepository.create({
      ...userData,
    });
    user.salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, user.salt);
    try {
      await this.userRepository.save(user);
    } catch (e) {
      throw new ConflictException(`try again`);
    }
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      roles: user.roles,
      dateOfBirth: user.dateOfBirth,
      phone: user.phone,
    };
  }

  async login(credentials: LoginCredentialsDto) {
    const { email, password } = credentials;
    const user = await this.userRepository
      .createQueryBuilder('user')
      .where('user.email = :username', {
        email,
      })
      .getOne();
    if (!user) throw new NotFoundException('username or password wrong');
    const hashedPassword = await bcrypt.hash(password, user.salt);
    if (hashedPassword === user.password) {
      const payload = {
        name: user.name,
        email: user.email,
        roles: user.roles,
      };
      const jwt = this.jwtService.sign(payload);
      return {
        access_token: jwt,
      };
    } else {
      throw new NotFoundException('email ou password erronés');
    }
  }

  isOwnerOrAdmin(objet, user) {
    return (
      user.role === UserRoleEnum.ADMIN ||
      (objet.user && objet.user.id === user.id)
    );
  }

  async findAll(options = null): Promise<User[]> {
    if (options) {
      return await this.userRepository.find(options);
    }
    return await this.userRepository.find();
  }

  async findOne(options = null): Promise<User[]> {
    if (options) {
      return await this.userRepository.find(options);
    }
    return await this.userRepository.find();
  }
}
