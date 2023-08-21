import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  senderId: string;

  @Column()
  receiverId: string;

  @Column()
  amount: number;

  @Column()
  transactionId: string;

  @Column()
  status: string;

  @Column()
  message: string;
}
