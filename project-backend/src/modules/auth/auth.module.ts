import { Module } from '@nestjs/common';
import { AuthController } from '../../controllers/auth/auth.controller';
import { AuthService } from '../../services/auth/auth.service';
import { UserModule } from '../../modules/user/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtSecret } from './auth.constants';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: jwtSecret,
      global: true,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
