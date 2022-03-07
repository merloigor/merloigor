import { Router } from "express";

import { billRoute } from "./bill.routes";

const router = Router();

router.use("/bills", billRoute);

export { router };
