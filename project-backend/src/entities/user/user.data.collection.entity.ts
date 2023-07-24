import { Column, Entity } from 'typeorm';

@Entity()
export class UserData {
  @Column()
  userId: string;

  @Column()
  age: number;

  @Column({ default: 0 })
  numberOfFollowers: number;

  @Column()
  amountOfMoneyMadeFromCorner: number;

  @Column()
  numberOfPosts: number;
}
