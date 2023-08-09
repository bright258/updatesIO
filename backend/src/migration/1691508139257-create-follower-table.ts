import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateFollowerTable1691508139257 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      `
        create table follower (
            id uuid_generate_v4() primary key,
            userId text,
            cornerId text
        )
        `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`drop table follower`);
  }
}
