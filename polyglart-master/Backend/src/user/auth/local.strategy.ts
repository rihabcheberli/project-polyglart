import {ModuleRef} from '@nestjs/core';
constructor(private moduleRef: ModuleRef) {
    super({
        passReqToCallback: true,
    });
}