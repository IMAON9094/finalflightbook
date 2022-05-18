import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FlightDto } from 'src/user/dto/flight.dto/flight-dto';
import { SeatDto } from 'src/user/dto/seat.dto/seat-dto';
import { UpdateuserDto } from 'src/user/dto/updateuser.dto/updateuser-dto';
import { UserDto } from 'src/user/dto/user.dto/user-dto';
import { FlightEntity } from 'src/user/entity/flight.entity';
import { SeatEntity } from 'src/user/entity/seat.entity';
import { UserEntity } from 'src/user/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,

    @InjectRepository(UserEntity)
    private flightRepository: Repository<FlightEntity>,

    @InjectRepository(UserEntity)
    private seatRepository: Repository<SeatEntity>,
  ) {}

  createU(auser: UserDto) {
    return this.userRepository.save(auser);
  }

  async findflight(): Promise<FlightDto[]> {
    return this.flightRepository.query('select * from flight_entity');
  }

  async remove(userID: number): Promise<void> {
    await this.userRepository.delete(userID);
  }

  findDay(datef: string): Promise<UserDto> {
    return this.userRepository.query(
      `select seatID,flight_entity.flightID from flight_entity join user_entity on flight_entity.flightID=flightdepID join seat_entity on seatID=seatdepID where flightDay="${datef}"`,
    );
  }

  async update(userID: number, updateuserdto: UpdateuserDto) {
    return this.userRepository.update(userID, updateuserdto);
  }
}
