import { Module } from '@nestjs/common';
import { UpdateService } from './update.service';
import { UpdateController } from './update.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

import { Update } from './entities/update.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    JwtModule.register({
      secret: process.env.jwtSecret,
      signOptions: { expiresIn: '1h' },
    }),
    TypeOrmModule.forFeature([Update]),
  ],
  controllers: [UpdateController],
  providers: [UpdateService],
})
export class UpdateModule {}
