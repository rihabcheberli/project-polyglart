import { IsOptional } from 'class-validator';
import { User } from '../../user/User.entity';
import { Site } from '../../sites/entities/Site.entity';

export class UpdateReservationDto {
  @IsOptional()
  _id: number;
  @IsOptional()
  startDate: Date;
  @IsOptional()
  endDate: Date;
  @IsOptional()
  total: number;
  @IsOptional()
  user: User;
  @IsOptional()
  site: Site;
}
