import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async signIn(CreateAuthDto) {
    const existingUser = await this.checkIfUserAlreadyExists(CreateAuthDto);

    if (existingUser) {
      this.checkIfPasswordsAreTheSame(CreateAuthDto.password, existingUser);

      const payload = {
        sub: existingUser?.id,
        username: CreateAuthDto.userName,
      };
      return await this.jwtService.signAsync(payload);
    }
  }

  private async checkIfUserAlreadyExists(CreateAuthDto) {
    const user = await this.userRepository.findOneBy({
      userName: CreateAuthDto.userName,
    });
    if (user) {
      return user;
    }
    throw new UnauthorizedException();
  }

  private async checkIfPasswordsAreTheSame(password: string, user: any) {
    const passwordsAretheSame = await bcrypt.compare(password, user?.password);
    if (passwordsAretheSame === false) {
      throw new UnauthorizedException();
    }
    return true;
  }
}
