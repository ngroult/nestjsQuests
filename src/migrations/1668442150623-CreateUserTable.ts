import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1668442150623 implements MigrationInterface {
    name = 'CreateUserTable1668442150623'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`email\` varchar(50) NOT NULL, \`password\` varchar(255) NOT NULL, \`firstname\` varchar(80) NOT NULL, \`lastname\` varchar(80) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
