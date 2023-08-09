import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUpdateTable1691507426278 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
    create table update(
        id uuid_generate_v4() primary key,
        cornerId text,
        content text,
        numberOfLikes integer,
        numberOfDislikes integer,
        pinned boolean

    )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`drop table update`);
  }
}
