import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import {Reservation} from "../reservation/Reservation.entity";



@Entity()
export class Site {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    location: {
        type: Loc,
        coordinates: Number,
    }

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    owner: {
        name: string,
        email: string;
    }

    @Column()
    unitPrice: number;

    @Column()
    placesAvailable: number;

    @Column()
    @OneToMany(type => Reservation, reservation => reservation.user)
    reservations: Reservation[];
}
export enum Loc{
    Point
}