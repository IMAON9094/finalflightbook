import { IsNumber } from 'class-validator';

export class SeatDto {
  @IsNumber()
  seatID: number;

  @IsNumber()
  seatNumber: number;

  @IsNumber()
  flightID: number;
}
