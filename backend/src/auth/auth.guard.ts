import {
  CanActivate,
  UnauthorizedException,
  Injectable,
  ExecutionContext,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = await context.switchToHttp().getRequest();
    const token: string = this.extractTokenFromHeader(request);
    if (!token) {
      this.throwUnathorizedException();
    }

    this.verifyToken(token, request);

    return true;
  }

  private verifyToken(token: string, request: Request) {
    try {
      const payload = this.authService.verifyAsync(token, {
        secret: process.env.jwtSecret,
      });

      request['user'] = payload;
    } catch {
      this.throwUnathorizedException();
    }
  }

  private throwUnathorizedException() {
    throw new UnauthorizedException();
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const token = request.headers['authorization'].split(' ')[1];
    return token;
  }
}
