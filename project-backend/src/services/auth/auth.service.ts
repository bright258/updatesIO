/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, password: string) {
    const user = await this.userService.findOneUser(username);

    if (user !== null) {
      this.checkIfPasswordsAreTheSame(password, user);

      const payload = {
        sub: user?.id,
        username: user?.username,
      };
      return await this.jwtService.signAsync(payload);
    }
  }

  private async checkIfPasswordsAreTheSame(password: string, user: any) {
    const passwordsAretheSame = await bcrypt.compare(password, user?.password);
    if (passwordsAretheSame === false) {
      throw new UnauthorizedException();
    }
    return true;
  }
}
