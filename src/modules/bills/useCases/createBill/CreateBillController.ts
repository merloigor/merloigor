import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateBillUseCase } from "./CreateBillUseCase";

class CreateBillController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { description, amount, due_date } = request.body;

        const createBillUseCase = container.resolve(CreateBillUseCase);

        await createBillUseCase.execute({ description, amount, due_date });

        return response.status(201).send();
    }
}

export { CreateBillController };
