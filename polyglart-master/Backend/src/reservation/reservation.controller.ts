import { Body, Controller, Post } from '@nestjs/common';

import { CreateReservationDto } from './dto/create-reservation.dto';
@Controller('reservations')
export class ReservationController {
  @Post()
  async addReservation(@Body() CreateReservationDto: CreateReservationDto) {
    return 'Your reservation was added';
  }
}
