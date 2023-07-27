import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  MaxLength,
  Matches,
  IsStrongPassword,
} from 'class-validator';

export class SignUpDTO {
  @IsNotEmpty()
  @MaxLength(20)
  @MinLength(1)
  firstName: string;

  @IsNotEmpty()
  @MaxLength(20)
  @MinLength(1)
  lastName: string;

  @IsNotEmpty()
  @MaxLength(10, { message: 'WTF, bro. Find a shorter username' })
  @MinLength(4, { message: 'well... get something a bit longer' })
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MaxLength(20, { message: 'too long' })
  @MinLength(4, { message: 'too short' })
  @IsStrongPassword()
  @Matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/, {
    message: `Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, and one underscore, and it 
    must be 8-16 characters long. Usage of any other special character and usage of space is optional.`,
  })
  password: string;

  @IsNotEmpty()
  dateOfBirth: Date;

  @IsNotEmpty()
  isActive: boolean;

  @IsNotEmpty()
  location: string;

  @IsNotEmpty()
  rank: string;
}
