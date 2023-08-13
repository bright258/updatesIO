import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async signIn(@Body() createAuthDto: CreateAuthDto) {
    try {
      return await this.authService.signIn(createAuthDto);
    } catch (err) {
      throw new HttpException(
        {
          status: HttpStatus.UNAUTHORIZED,
          error: 'You are not authorized to do this',
        },
        HttpStatus.UNAUTHORIZED,
        {
          cause: err,
        },
      );
    }
  }
}
