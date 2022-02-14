import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AdminMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    if (!req.user.roles.find((x) => x === 'admin'))
      return res.status(403).send('access denied! ');
    next();
  }
}
