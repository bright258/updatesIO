import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from './entities/transaction.entity';
import { FollowersModule } from 'src/followers/followers.module';
import { CornerModule } from 'src/corner/corner.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Transaction]),
    FollowersModule,
    CornerModule,
  ],
  controllers: [TransactionsController],
  providers: [TransactionsService],
})
export class TransactionsModule {}
