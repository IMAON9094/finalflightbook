import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FlightEntity {
  @PrimaryGeneratedColumn()
  flightID: number;

  @Column()
  fromlocate: string;

  @Column()
  tolocate: string;

  @Column()
  flightDay: Date;
}
