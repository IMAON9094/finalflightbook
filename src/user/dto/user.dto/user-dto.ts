import { IsNumber, IsString } from 'class-validator';

export class UserDto {
  @IsNumber()
  userID: number;

  @IsString()
  fullname: string;

  @IsNumber()
  flightdepID: number;

  @IsNumber()
  seatdepID: number;

  @IsNumber()
  flightarvID: number;

  @IsNumber()
  seatarvID: number;

  @IsNumber()
  adult: number;

  @IsNumber()
  children: number;

  @IsNumber()
  infrants: number;
}
