import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './controller/user/user.controller';
import { FlightEntity } from './entity/flight.entity';
import { SeatEntity } from './entity/seat.entity';
import { UserEntity } from './entity/user.entity';
import { UserService } from './services/user/user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    TypeOrmModule.forFeature([FlightEntity]),
    TypeOrmModule.forFeature([SeatEntity]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
