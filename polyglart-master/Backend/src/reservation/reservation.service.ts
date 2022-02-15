import {
  CACHE_MANAGER,
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Reservation } from './entities/Reservation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { UserRoleEnum } from '../enums/user-role.enum';
import { UserService } from '../user/users.service';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Cache } from 'cache-manager';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(Reservation)
    private reservationRepository: Repository<Reservation>,
    private userService: UserService,
    private eventEmitter: EventEmitter2,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async findReservationById(id: number, user) {
    const reservation = await this.reservationRepository.findOne(id);
    if (!reservation) {
      throw new NotFoundException(`${id} n'existe pas`);
    }
    if (this.userService.isOwnerOrAdmin(reservation, user)) {
      return reservation;
    } else throw new UnauthorizedException();
  }
  async getReservations(user): Promise<Reservation[]> {
    if (user.role === UserRoleEnum.ADMIN)
      return await this.reservationRepository.find();
    return await this.reservationRepository.find({ user: user });
  }

  async addReservation(
    reservation: CreateReservationDto,
    user,
  ): Promise<Reservation> {
    const newReservation = this.reservationRepository.create(reservation);
    newReservation.user = user;
    await this.reservationRepository.save(newReservation);
    return newReservation;
  }

  async updateReservation(
    id: number,
    reservation: UpdateReservationDto,
    user,
  ): Promise<Reservation> {
    const newReservation = await this.reservationRepository.preload({
      id: reservation._id,
    });
    if (!newReservation) {
      throw new NotFoundException(`${id} n'existe pas`);
    }
    if (this.userService.isOwnerOrAdmin(newReservation, user))
      return await this.reservationRepository.save(newReservation);
    else new UnauthorizedException('');
  }

  async removeReservation(id: number, user) {
    const reservationToRemove = await this.findReservationById(id, user);
    return await this.reservationRepository.remove(reservationToRemove);
  }

  async softDeleteReservation(id: number, user) {
    const reservation = await this.reservationRepository.findOne({ id });
    if (!reservation) {
      throw new NotFoundException('');
    }
    if (this.userService.isOwnerOrAdmin(reservation, user))
      return this.reservationRepository.softDelete(id);
    else throw new UnauthorizedException('');
  }

  async restoreReservation(id: number, user) {
    const reservation = await this.reservationRepository.query(
      'select * from Reservation where id = ?',
      [id],
    );
    if (!reservation) {
      throw new NotFoundException('');
    }
    if (this.userService.isOwnerOrAdmin(reservation, user))
      return this.reservationRepository.restore(id);
    else throw new UnauthorizedException('');
  }

  async deleteReservation(id: number) {
    return await this.reservationRepository.delete(id);
  }
}
