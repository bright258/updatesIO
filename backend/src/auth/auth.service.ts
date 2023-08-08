import {
  Injectable,
  UnauthorizedException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { CreateAuthDto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async signIn(createAuthDto: CreateAuthDto) {
    const existingUser = await this.checkIfUserAlreadyExists(createAuthDto);

    if (existingUser) {
      await this.checkIfPasswordsAreTheSame(
        createAuthDto.password,
        existingUser,
      );

      const payload = {
        sub: existingUser?.id,
        username: createAuthDto.username,
      };
      return this.jwtService.signAsync(payload);
    } else {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'User not found',
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }

  private async checkIfUserAlreadyExists(createAuthDto: CreateAuthDto) {
    try {
      const user = await this.userRepository.findOneBy({
        userName: createAuthDto.username,
      });
      return user;
    } catch (err) {
      return err;
    }
  }

  private async checkIfPasswordsAreTheSame(password: string, user: any) {
    try {
      const passwordsAretheSame = bcrypt.compare(password, user?.password);
      if (passwordsAretheSame === false) {
        throw new UnauthorizedException();
      }
      return true;
    } catch (err) {
      return err;
    }
  }
}
