import { Injectable, Inject } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Transaction } from './entities/transaction.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FollowersService } from 'src/followers/followers.service';
import { CornerService } from 'src/corner/corner.service';
import { CreateFollowerDto } from 'src/followers/dto/create-follower.dto';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private transactionService: Repository<Transaction>,
    @Inject(FollowersService)
    private followersService: FollowersService,
    @Inject(CornerService)
    private cornerService: CornerService,
  ) {}

  async create(createTransactionDto: CreateTransactionDto) {
    const corner = await this.cornerService.findByOwnerId(
      createTransactionDto.receiverId,
    );
    console.log(corner);

    await this.followersService.create({
      cornerId: corner.id,
      userId: createTransactionDto.senderId,
    });

    return await this.transactionService.save(
      this.transactionService.create(createTransactionDto),
    );
  }

  // async private getCorner

  async findAll() {
    return await this.transactionService.find();
  }

  async findOne(id: string) {
    return await this.transactionService.findOneBy({ id });
  }

  async remove(id: string) {
    return await this.transactionService.delete({ id: id });
  }

  async removeAllTransactions() {
    return await this.transactionService.clear();
  }
}
