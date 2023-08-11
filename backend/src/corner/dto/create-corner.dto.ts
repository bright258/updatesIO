import { IsNotEmpty, IsString } from 'class-validator';
export class CreateCornerDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  numberOfTokensNeededToJoin: number;

  @IsString()
  @IsNotEmpty()
  ownerId: string;

  @IsString()
  @IsNotEmpty()
  profilePictureUrl: string;

  @IsString()
  @IsNotEmpty()
  category: string;
}
