import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
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
      const passwordChecker = await this.checkIfPasswordsAreTheSame(
        createAuthDto.password,
        existingUser,
      );
      if (passwordChecker === false) {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: 'Invalid password',
          },
          HttpStatus.NOT_FOUND,
        );
      } else {
        const payload = {
          sub: existingUser?.id,
          username: existingUser?.username,
        };
        return this.jwtService.signAsync(payload);
      }
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
      const passwordsAretheSame: boolean = await bcrypt.compare(
        password,
        user?.password,
      );

      if (passwordsAretheSame === false) {
        return false;
      } else {
        return true;
      }
    } catch (err) {
      return err;
    }
  }
}
