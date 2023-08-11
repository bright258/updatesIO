import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  MaxLength,
  Matches,
} from 'class-validator';

export class CreateUserDto {
  @MaxLength(20)
  @MinLength(1)
  firstName: string;

  @MaxLength(20)
  @MinLength(1)
  lastName: string;

  @MaxLength(10, { message: 'Kindly Find a shorter username' })
  @MinLength(4, { message: 'Kindly Find a longer username' })
  userName: string;

  @IsEmail()
  email: string;

  @MaxLength(20, { message: 'Password is too long' })
  @MinLength(4, { message: 'Password is too short' })
  password: string;

  @IsNotEmpty()
  country: string;
}
