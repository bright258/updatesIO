import { IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class LoginDto {
  @MaxLength(10)
  @MaxLength(20, { message: 'Incorrect username or password' }) //I do not know if it is 10 or 20 you want so I cannot say which one is correct
  @MinLength(4, { message: 'Incorrect username or password' })
  username: string;

  @IsNotEmpty()
  password: string;
}
