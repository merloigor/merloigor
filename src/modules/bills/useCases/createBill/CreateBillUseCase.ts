import { inject, injectable } from "tsyringe";

import { IBillRepository } from "../../repositories/IBillRepository";

interface IRequest {
    description: string;
    amount: number;
    due_date: Date;
}

@injectable()
class CreateBillUseCase {
    constructor(
        @inject("BillRepository")
        private billRepository: IBillRepository
    ) {}

    async execute({ description, amount, due_date }: IRequest): Promise<void> {
        const billExists = this.billRepository.findByDescription(description);

        if (billExists) {
            throw new Error(`Bill ${description} already exists`);
        }

        this.billRepository.create({ description, amount, due_date });
    }
}

export { CreateBillUseCase };
