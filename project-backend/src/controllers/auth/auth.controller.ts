import { Controller, Post, Request } from '@nestjs/common';
import { AuthService } from '../../services/auth/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/auth')
  signInUser(@Request() username: string, password: string) {
    return this.authService.signIn(username, password);
  }
}
