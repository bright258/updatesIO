import { PartialType } from '@nestjs/mapped-types';
import { CreateCornerDto } from './create-corner.dto';

export class UpdateCornerDto extends PartialType(CreateCornerDto) {
  name: string;

  description: string;

  numberOfTokensNeededToJoin: number;

  profilePictureUrl: string;

  category: string;
}
