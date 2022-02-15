import { Body, Controller, Post } from '@nestjs/common';

import { CreateReservationDto } from './create-reservation.dto';
@Controller('reservations')
export class ReservationsController {
  @Post()
  async addReservation(@Body() CreateReservationDto: CreateReservationDto) {
    return 'Your reservation was added';
  }
}
