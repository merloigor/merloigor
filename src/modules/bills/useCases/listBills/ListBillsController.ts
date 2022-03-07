import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListBillsUseCase } from "./ListBillsUseCase";

class ListBillsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listBillsUseCase = container.resolve(ListBillsUseCase);

        const bills = await listBillsUseCase.execute();

        return response.json(bills);
    }
}

export { ListBillsController };
