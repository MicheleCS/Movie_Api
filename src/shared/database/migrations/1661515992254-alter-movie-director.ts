import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class alterMovieDirector1661515992254 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'movies',
      'director',
      new TableColumn({
        name: 'director',
        type: 'varchar',
        isUnique: false,
        isNullable: false,
        default: "'directorTeste'",
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'movies',
      'director',
      new TableColumn({
        name: 'director',
        type: 'varchar',
        isUnique: true,
        isNullable: false,
      }),
    );
  }
}
