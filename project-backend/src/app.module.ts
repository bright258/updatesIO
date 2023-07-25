import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user/user.entity';
import { UserModule } from './modules/users.module';
import { ConfigModule } from '@nestjs/config';

Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), //Provides global access to environment variables
    TypeOrmModule.forRoot({
      host: 'localhost', //Host should be passed in as an environment variable
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: 3000,
      database: process.env.DB_DATABASE,
      type: 'postgres',
      entities: [User], //You can add a path to your entities here, take a look at the typeorm docs for more info. This will prevent manual addition of entities in the future.
    }),
    UserModule,
  ],
});
export class AppModule {}
