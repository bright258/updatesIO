import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user/user.entity';
import { UserModule } from './modules/users.module';
import { configDotenv } from 'dotenv';
configDotenv();

Module({
  imports: [
    TypeOrmModule.forRoot({
      host: 'localhost',
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: 3000,
      database: process.env.DB_DATABASE,
      type: 'postgres',
      entities: [User],
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
});
export class AppModule {}
