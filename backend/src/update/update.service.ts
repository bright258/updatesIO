import { Injectable } from '@nestjs/common';
import { CreateUpdateDto } from './dto/create-update.dto';
import { UpdateUpdateDto } from './dto/update-update.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Update } from './entities/update.entity';

@Injectable()
export class UpdateService {
  constructor(
    @InjectRepository(Update)
    private updateService: Repository<Update>,
  ) {}
  async create(createUpdateDto: CreateUpdateDto) {
    return await this.updateService.save(
      this.updateService.create(createUpdateDto),
    );
  }

  async findAll(cornerId: string): Promise<Update[]> {
    return (await this.updateService.find()).filter(
      (item) => item.cornerId === cornerId,
    );
  }

  async findOne(id: string) {
    return await this.updateService.findOneBy({ id: id });
  }

  async update(id: string, updateUpdateDto: UpdateUpdateDto) {
    return await this.updateService.update(
      { id },
      { content: updateUpdateDto.content, pinned: updateUpdateDto.pinned },
    );
  }

  async remove(id: string) {
    return await this.updateService.delete({ id: id });
  }
}
