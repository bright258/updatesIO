import { Get, Delete, Controller, Param, Post, Body } from '@nestjs/common';
import { User } from '../entities/user/user.entity';
import { UserService } from '../services/users.service';
import { SignUpDTO } from '../DTOs/userDTO/signUp.DTO';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  findAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get('/:id')
  async findSingleUser(@Param('id') id: string): Promise<User | null> {
    return this.userService.findOneUser(id);
  }

  @Post('/add/user')
  async addUser(@Body() userData: SignUpDTO): Promise<any> {
    await this.userService.addUserService(userData);
  }
}
