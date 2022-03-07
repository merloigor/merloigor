import { getRepository, Repository } from "typeorm";

import { Bill } from "../../entities/Bill";
import { IBillRepository, ICreateBillDTO } from "../IBillRepository";

class BillRepository implements IBillRepository {
    private repository: Repository<Bill>;

    constructor() {
        this.repository = getRepository(Bill);
    }

    findByDescription(description: string): Promise<Bill> {
        return this.repository.findOne({ description });
    }

    async create({
        description,
        amount,
        due_date,
    }: ICreateBillDTO): Promise<void> {
        const bill = this.repository.create({
            description,
            amount,
            due_date,
        });

        await this.repository.save(bill);
    }

    async list(): Promise<Bill[]> {
        const bills = await this.repository.find();

        return bills;
    }
}

export { BillRepository };
