import { IsNumber, IsString } from 'class-validator';

export class FlightDto {
  @IsNumber()
  flightID: number;

  @IsString()
  fromlocate: string;

  @IsString()
  tolocate: string;

  @IsNumber()
  flightDay: Date;
}
