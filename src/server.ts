import express from "express";

import "reflect-metadata";

import { router } from "./routes";

import "./database";
import "./shared/container";

const app = express();

app.use(express.json());

app.use(router);

app.listen(3000, () => console.log("Server is runnig"));
