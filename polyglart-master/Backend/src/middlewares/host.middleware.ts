import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class HostMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    if (!req.user.roles.find((x) => x === 'host'))
      return res.status(403).send('access denied! ');
    next();
  }
}
