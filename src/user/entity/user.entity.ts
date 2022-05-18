import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  userID: number;

  @Column({ nullable: false })
  fullname: string;

  @Column({ nullable: true })
  flightdepID: number;

  @Column({ nullable: true })
  seatdepID: number;

  @Column({ nullable: true })
  flightarvID: number;

  @Column({ nullable: true })
  seatarvID: number;

  @Column({ nullable: false })
  adult: number;

  @Column({ nullable: false })
  children: number;

  @Column({ nullable: false })
  infrants: number;
}
