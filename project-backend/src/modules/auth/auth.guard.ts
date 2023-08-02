import {
  CanActivate,
  UnauthorizedException,
  Injectable,
  ExecutionContext,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtSecret } from './auth.constants';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = await context.switchToHttp().getRequest();
    const token: string = this.extractTokenFromHeader(request) ?? '';
    if (!token) {
      this.throwUnathorizedException();
    }

    this.verifyToken(token, request);

    return true;
  }

  private verifyToken(token: string, request: any) {
    try {
      const payload = this.authService.verifyAsync(token, {
        secret: jwtSecret,
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
    const [type, token] =
      request.headers.keys.prototype.authorization.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
