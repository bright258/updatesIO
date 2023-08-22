import { Module } from '@nestjs/common';
import { FollowersController } from './followers.controller';
import { FollowersService } from './followers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Follower } from './entities/follower.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Follower])],
  controllers: [FollowersController],
  providers: [FollowersService],
  exports: [FollowersService],
})
export class FollowersModule {}
