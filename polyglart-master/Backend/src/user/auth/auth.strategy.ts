import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import {Injectable, UnauthorizedException} from '@nestjs/common';
import { AuthService } from './auth.service';
import {Payload} from "src/user/payload";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super();
    }

    async validate(email: string, password: string): Promise<any> {
        let p= new Payload(email);
        const user = await this.authService.validateUser(p);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}
