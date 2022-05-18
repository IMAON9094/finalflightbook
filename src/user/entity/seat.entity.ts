import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SeatEntity {
  @PrimaryGeneratedColumn()
  seatID: number;

  @Column()
  seatNumber: number;

  @Column()
  flightID: number;
}
