import { Injectable } from '@nestjs/common';
import { CreateCornerDto } from './dto/create-corner.dto';
import { UpdateCornerDto } from './dto/update-corner.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Corner } from './entities/corner.entity';

@Injectable()
export class CornerService {
  constructor(
    @InjectRepository(Corner)
    private cornerService: Repository<Corner>,
  ) {}
  async create(createCornerDto: CreateCornerDto) {
    return await this.cornerService.save(
      this.cornerService.create(createCornerDto),
    );
  }

  async findAll() {
    return await this.cornerService.find();
  }

  async findAllInOneCategory(category: string) {
    return (await this.cornerService.find()).filter(
      (corner) => corner.category === category,
    );
  }

  async findOne(id: string) {
    return await this.cornerService.findOneBy({ id });
  }

  async update(id: string, updateCornerDto: UpdateCornerDto) {
    return await this.cornerService.update(
      { id },
      {
        name: updateCornerDto.name,
        description: updateCornerDto.description,
        numberOfTokensNeededToJoin: updateCornerDto.numberOfTokensNeededToJoin,
        profilePictureUrl: updateCornerDto.profilePictureUrl,
      },
    );
  }

  async remove(id: string) {
    return await this.cornerService.delete({ id: id });
  }

  async removeAllCorners() {
    return await this.cornerService.clear();
  }
}
