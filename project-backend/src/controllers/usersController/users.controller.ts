import { Get, Controller, Param, Post, Body, UseGuards } from '@nestjs/common';
import { User } from '../../entities/user.entity';
import { UserService } from '../../services/user/users.service';
import { SignUpDTO } from '../../DTOs/userDTO/signUp.DTO';
import { AuthGuard } from '../../modules/auth/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  findAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get('/username')
  @UseGuards(AuthGuard)
  async findSingleUser(
    @Param('username') username: string,
  ): Promise<User | null> {
    return this.userService.findOneUser(username);
  }

  @Post('/')
  async addUser(@Body() userData: SignUpDTO): Promise<User> {
    return await this.userService.addUserService(userData);
  }
}
