import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserSubscribeDto } from './dto/user-subscribe.dto';
import { UserService } from './users.service';
import { LoginCredentialsDto } from './dto/login-credentials.dto';
import { User } from './entities/User.entity';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  register(@Body() userData: UserSubscribeDto) {
    return this.userService.register(userData);
  }

  @Post('login')
  login(@Body() credentials: LoginCredentialsDto) {
    return this.userService.login(credentials);
  }

  @Get('all')
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
}
