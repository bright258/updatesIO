import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entities/user.entity';
import { SignUpDTO } from '../../DTOs/userDTO/signUp.DTO';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOneUser(username: string): Promise<User | null> {
    return await this.userRepository.findOneBy({ username });
  }

  async removeUser(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }

  async addUserService(user: SignUpDTO): Promise<User> {
    const newUser = this.userRepository.create(user);
    return await this.userRepository.save(newUser);
  }
}
