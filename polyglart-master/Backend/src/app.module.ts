import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {SitesController} from './sites/sites.controller';
import {ReservationsController} from './reservation/reservations.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [AppController, SitesController, ReservationsController],
  providers: [AppService],
})
export class AppModule {}
