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
    const update = this.updateService.create(createUpdateDto);
    return this.updateService.save(update);
  }

  findAll(cornerId) {
    return this.updateService.find();
  }

  private checkIfCornerExists(cornerId) {
    return;
  }

  findOne(id: number) {
    return `This action returns a #${id} update`;
  }

  async update(id: string, updateUpdateDto: UpdateUpdateDto) {
    const itemToUpdate = await this.updateService.findOneBy({ id: id });
    itemToUpdate.content = updateUpdateDto.content;
    itemToUpdate.pinned = updateUpdateDto.pinned;

    return this.updateService.save(itemToUpdate);
  }

  remove(id: number) {
    return `This action removes a #${id} update`;
  }
}
