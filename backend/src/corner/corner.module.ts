import { Module } from '@nestjs/common';
import { CornerController } from './corner.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Corner } from './entities/corner.entity';
import { CornerService } from './corner.service';

@Module({
  imports: [TypeOrmModule.forFeature([Corner])],
  controllers: [CornerController],
  providers: [CornerService],
  exports: [CornerService],
})
export class CornerModule {}
