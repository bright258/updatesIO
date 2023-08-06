import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateNewUserTable1691308460851 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      `
        create table user (
            id uuid_generate_v4()primary key,
            firstName text,
            lastName text,
            email text,
            userName text,
            password text,
            country text,
            dateOfBirth text
    

        )
        `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
    drop table user`);
  }
}
