import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user/user.entity';
import { SignUpDTO } from '../DTOs/userDTO/signUp.DTO';
import { HashUserPassword } from '../utils/signUp.utils';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOneUser(id: string): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }

  async removeUser(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }

  async addUserService(user: SignUpDTO): Promise<User> {
    const newPassword = await HashUserPassword.prototype.hashUserPassword(
      user.password,
    );
    user.password = newPassword;
    return this.userRepository.save(user);
  }

  // loginUserService(): Pro
}
