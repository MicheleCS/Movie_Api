import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class alterMovie1661514944312 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'movies',
      'actor',
      new TableColumn({
        name: 'actor',
        type: 'varchar',
        isUnique: false,
        isNullable: false,
        default: "'actorTeste'",
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'movies',
      'actor',
      new TableColumn({
        name: 'actor',
        type: 'varchar',
        isUnique: true,
        isNullable: false,
      }),
    );
  }
}
