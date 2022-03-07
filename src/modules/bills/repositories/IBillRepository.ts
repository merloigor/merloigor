import { Bill } from "../entities/Bill";

interface ICreateBillDTO {
    description: string;
    amount: number;
    due_date: Date;
}

interface IBillRepository {
    create({ description, amount, due_date }: ICreateBillDTO): Promise<void>;
    list(): Promise<Bill[]>;
    findByDescription(description: string): Promise<Bill>;
}

export { ICreateBillDTO, IBillRepository };
