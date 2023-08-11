import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<User> {
    console.log(createUserDto);
    return await this.userRepository.save(
      this.userRepository.create(createUserDto),
    );
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: string): Promise<User> {
    return await this.userRepository.findOneBy({ id });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userRepository.update(
      { id },
      { userName: updateUserDto.userName },
    );
  }

  async remove(id: string) {
    return await this.userRepository.delete({ id: id });
  }

  async removeAllUsers() {
    return await this.userRepository.clear();
  }
}
