import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { UpdateModule } from './update/update.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from './user/entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), //Provides global access to environment variables
    TypeOrmModule.forRoot({
      host: process.env.HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: 5432,
      database: process.env.DB_DATABASE,
      type: 'postgres',
      synchronize: true,
      entities: [User], //You can add a path to your entities here, take a look at the typeorm docs for more info. This will prevent manual addition of entities in the future.
      migrations: [], //You can add a path to your migrations here, take a look at the typeorm docs for more info. This will prevent manual addition of migrations in the future.
    }),
    AuthModule,
    UserModule,
    UpdateModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
