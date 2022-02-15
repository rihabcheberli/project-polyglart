import { User } from '../../user/User.entity';
import { Site } from '../../sites/entities/Site.entity';

export class CreateReservationDto {
  _id: number;
  startDate: Date;
  endDate: Date;
  total: number;
  user: User;
  site: Site;
}
