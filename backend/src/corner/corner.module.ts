import { Module } from '@nestjs/common';
import { CornerService } from './corner.service';
import { CornerController } from './corner.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Corner } from './entities/corner.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Corner])],
  controllers: [CornerController],
  providers: [CornerService],
})
export class CornerModule {}
