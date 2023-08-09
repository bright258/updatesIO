import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCornerTable1691508098679 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
    create table corner (
        id uuid_generate_v4() primary key,
        name text,
        description text,
        numberOfTokensNeededTojoin integer,
        isActive boolean,
        incomeMade integer,
        numberOfAvailableUpdateToken integer,
        ownerId text

    )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
    drop table corner`);
  }
}
