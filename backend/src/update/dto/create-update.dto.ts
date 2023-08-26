import { IsNotEmpty, IsString, IsBoolean } from 'class-validator';
export class CreateUpdateDto {
  @IsString()
  @IsNotEmpty()
  cornerId: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  @IsBoolean()
  pinned: boolean;
}
