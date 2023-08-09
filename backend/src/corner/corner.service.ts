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
  create(createCornerDto: CreateCornerDto) {
    const corner = this.cornerService.create(createCornerDto);
    return this.cornerService.save(corner);
  }

  findAll() {
    return `This action returns all corner`;
  }

  findOne(id: number) {
    return `This action returns a #${id} corner`;
  }

  update(id: number, updateCornerDto: UpdateCornerDto) {
    return `This action updates a #${id} corner`;
  }

  remove(id: number) {
    return `This action removes a #${id} corner`;
  }
}
