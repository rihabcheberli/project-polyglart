import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SitesController } from './sites/sites.controller';
import { ReservationController } from './reservation/reservation.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [AppController, SitesController, ReservationController],
  providers: [AppService],
})
export class AppModule {}
