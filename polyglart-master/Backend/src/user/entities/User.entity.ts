import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Reservation } from '../../reservation/entities/Reservation.entity';
import { Exclude } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column()
  dateOfBirth: Date;

  @Column()
  roles: Roles;

  @Column({ default: false })
  isActive: boolean;

  @Column()
  @OneToMany((type) => Reservation, (reservation) => reservation.user)
  reservations: Reservation[];

  @Column()
  @Exclude()
  salt: string;
}
export enum Roles {
  user,
  host,
  admin,
}
