import { CacheModule, Module } from '@nestjs/common';
import { SitesController } from './sites.controller';
import { SiteService } from './sites.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Site } from './entities/Site.entity';
import { UsersModule } from '../user/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Site]),
    UsersModule,
    CacheModule.register({}),
  ],
  controllers: [SitesController],
  providers: [SiteService],
})
export class SiteModule {}
