import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
export class Corner {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ default: 0 })
  numberOfTokensNeededToJoin: number;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: 0 })
  incomeMade: number;

  @Column({ default: 0 })
  numberOfAvailableUpdateToken: number;

  @Column()
  category: string;

  @Column({ default: '' })
  profilePictureUrl: string;

  @Column()
  @Index()
  ownerId: string;
}
