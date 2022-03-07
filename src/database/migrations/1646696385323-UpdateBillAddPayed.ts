import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class UpdateBillAddPayed1646696385323 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "Bill",
            new TableColumn({
                name: "is_payed",
                type: "boolean",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("Bill", "is_payed");
    }
}
