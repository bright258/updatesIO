import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/users.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';

Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), //Provides global access to environment variables
    TypeOrmModule.forRoot({
      host: process.env.HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: 3000,
      database: process.env.DB_DATABASE,
      type: 'postgres',
      entities: ['./dist/entities/*.js'], //You can add a path to your entities here, take a look at the typeorm docs for more info. This will prevent manual addition of entities in the future.
      migrations: ['./dist/migrations/*.js'], //You can add a path to your migrations here, take a look at the typeorm docs for more info. This will prevent manual addition of migrations in the future.
    }),
    UserModule,
    AuthModule,
  ],
});
export class AppModule {}
