import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateWalletTable1691508105722 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      `
        create table wallet (
            id uuid_generate_v4() primary key,
            balance integer,
            userId text,
        )
        `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(` drop table wallet`);
  }
}
