import {Loc} from "./Site.entity";
import {Reservation} from "../reservation/Reservation.entity";

export class CreateSiteDto{
    _id: number;
    name: string;
    description: string;
    location: {
        type: Loc,
        coordinates: Number,
    }
    email: string;
    phone: string;
    owner: {
        name: string,
        email: string;
    }
    unitPrice: number;
    placesAvailable: number;
    reservations: Reservation[];
}