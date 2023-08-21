import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTransactionDto {
  @IsString()
  @IsNotEmpty()
  senderId: string;

  @IsString()
  @IsNotEmpty()
  receiverId: string;

  @IsNotEmpty()
  amount: number;

  @IsString()
  @IsNotEmpty()
  transactionId: string;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsString()
  @IsNotEmpty()
  message: string;
}
