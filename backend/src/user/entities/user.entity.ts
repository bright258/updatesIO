import { IsEmail, IsNotEmpty } from 'class-validator';
import * as bcrypt from 'bcrypt';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsNotEmpty()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  @Index()
  @IsNotEmpty()
  userName: string;

  @Column({ unique: true })
  @Index() //I Added a unique index to hasten queries
  @IsEmail()
  email: string;

  @Column()
  @IsNotEmpty()
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ nullable: true })
  country: string;

  @Column({ default: 'novice' })
  rank: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn({ nullable: true })
  updatedAt: Date;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
