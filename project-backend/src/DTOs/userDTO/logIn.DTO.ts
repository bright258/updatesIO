import { IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class SignUpDTO {
  @IsNotEmpty()
  @MaxLength(10)
  @MinLength(4)
  @MaxLength(20, { message: 'too long' })
  @MinLength(4, { message: 'too short' })
  username: string;

  @IsNotEmpty()
  password: string;
}
