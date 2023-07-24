import { Column, Entity } from 'typeorm';

@Entity()
export class UserActivity {
  @Column()
  userId: string;

  @Column({ default: false })
  isACreator: boolean;

  @Column({ default: 'none' })
  nameOfCorner: string;

  @Column({ default: 0 })
  cornerFee: number;
}
