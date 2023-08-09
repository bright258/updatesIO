import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Update {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Index()
  cornerId: string;

  @Column()
  content: string;

  @Column({ default: 0 })
  numberOfLikes: number;

  @Column({ default: 0 })
  numberOfDislikes: number;

  @Column({ default: false })
  pinned: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn({ nullable: true })
  updatedAt: Date;
}
