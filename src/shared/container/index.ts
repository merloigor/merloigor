import { container } from "tsyringe";

import { IBillRepository } from "../../modules/bills/repositories/IBillRepository";
import { BillRepository } from "../../modules/bills/repositories/implementations/BillRepository";

container.registerSingleton<IBillRepository>("BillRepository", BillRepository);
