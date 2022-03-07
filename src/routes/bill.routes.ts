import { Router } from "express";

import { CreateBillController } from "../modules/bills/useCases/createBill/CreateBillController";
import { ListBillsController } from "../modules/bills/useCases/listBills/ListBillsController";

const billRoute = Router();

const createBillController = new CreateBillController();
const listBillsController = new ListBillsController();

billRoute.post("/", createBillController.handle);
billRoute.get("/", listBillsController.handle);

export { billRoute };
