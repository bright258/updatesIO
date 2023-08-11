import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CornerService } from './corner.service';
import { CreateCornerDto } from './dto/create-corner.dto';
import { UpdateCornerDto } from './dto/update-corner.dto';

@Controller('corner')
export class CornerController {
  constructor(private readonly cornerService: CornerService) {}

  @Post()
  create(@Body() createCornerDto: CreateCornerDto) {
    // console.log(CreateCornerDto);
    return this.cornerService.create(createCornerDto);
  }

  @Get()
  findAll() {
    return this.cornerService.findAll();
  }

  @Get('/category')
  findAllInOneCategory(@Param('category') category: string) {
    return this.cornerService.findAllInOneCategory(category);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cornerService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCornerDto: UpdateCornerDto) {
    return this.cornerService.update(id, updateCornerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cornerService.remove(id);
  }
  @Delete()
  removeAll() {
    return this.cornerService.removeAllCorners();
  }
}
