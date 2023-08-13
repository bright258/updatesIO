import 'reflect-metadata';
import { DataSource } from 'typeorm';
import 'dotenv/config';
import { User } from './user/entities/user.entity';
import { Update } from './update/entities/update.entity';
import { Corner } from './corner/entities/corner.entity';
import { Wallet } from './wallet/entities/wallet.entity';
import { Follower } from './followers/entities/follower.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,
  logging: false,
  entities: [User, Update, Corner, Wallet, Follower],
  migrations: ['./src/migration/*.ts'],
  subscribers: [],
});
