import { inject, injectable } from "tsyringe";

import { Bill } from "../../entities/Bill";
import { IBillRepository } from "../../repositories/IBillRepository";

@injectable()
class ListBillsUseCase {
    constructor(
        @inject("BillRepository")
        private billRepository: IBillRepository
    ) {}

    async execute(): Promise<Bill[]> {
        return this.billRepository.list();
    }
}

export { ListBillsUseCase };
