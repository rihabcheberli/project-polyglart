import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { Loc } from '../entities/Site.entity';

export class UpdateSiteDto {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  location: Loc;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  phone: string;

  @IsOptional()
  @IsString()
  email: string;

  @IsOptional()
  @IsNumber()
  unitPrice: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  placesAvailable: number;
}
