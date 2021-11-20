import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateDatabase1637420301132 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createDatabase('carsapp', true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropDatabase('carsapp', true);
  }
}
