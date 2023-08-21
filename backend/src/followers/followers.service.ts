import { Injectable } from '@nestjs/common';
import { CreateFollowerDto } from './dto/create-follower.dto';
import { UpdateFollowerDto } from './dto/update-follower.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Follower } from './entities/follower.entity';

@Injectable()
export class FollowersService {
  constructor(
    @InjectRepository(Follower)
    private followerService: Repository<Follower>,
  ) {}
  async create(createFollowerDto: CreateFollowerDto) {
    return await this.followerService.save(
      this.followerService.create(createFollowerDto),
    );
  }

  findAll() {
    return `This action returns all followers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} follower`;
  }

  update(id: number, updateFollowerDto: UpdateFollowerDto) {
    return `This action updates a #${id} follower`;
  }

  remove(id: number) {
    return `This action removes a #${id} follower`;
  }
}
