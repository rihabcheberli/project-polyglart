import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PayloadInterface } from '../interfaces/payload.interfaces';
import { Repository } from 'typeorm';
import { User } from '../entities/User.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('SECRET'),
    });
  }

  async validate(payload: PayloadInterface) {
    console.log(payload);
    const user = await this.userRepository.findOne({
      id: payload.id,
    });
    if (user) {
      delete user.salt;
      delete user.password;
      return user;
    } else {
      throw new UnauthorizedException();
    }
  }
}
