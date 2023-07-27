import { IsEmail, IsNotEmpty } from 'class-validator';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  @IsNotEmpty()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  @Index()
  @IsNotEmpty()
  username: string;

  @Column({ unique: true })
  @Index() //I Added a unique index to hasten queries
  @IsEmail()
  email: string;

  @Column()
  @IsNotEmpty()
  password: string;

  @Column()
  @IsNotEmpty()
  dateOfBirth: Date;

  @Column({ default: true })
  isActive: boolean;

  @Column()
  location: string;

  @Column({ default: 'novice' })
  rank: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
