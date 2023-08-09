import { PartialType } from '@nestjs/mapped-types';
import { CreateUpdateDto } from './create-update.dto';

export class UpdateUpdateDto extends PartialType(CreateUpdateDto) {
  content: string;

  pinned: boolean;
}
