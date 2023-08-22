import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTransactionsTable1692649329867
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
    create table transactions (
        id uuid_generate_v4() primary key,
        senderId text,
        receiverId text,
        amount integer,
        transactionId text,
        status text,
        message text

    ) `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`drop table transactions`);
  }
}
