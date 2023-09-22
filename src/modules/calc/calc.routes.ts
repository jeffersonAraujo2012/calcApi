import { exec } from "./calc.controllers";
import { validateBody } from "@/middlewares/validate.middleware";
import execCalcSchema from "./schemas/calc.schema";
import { Router } from "express";
import auth from "@/middlewares/auth.middleware";
const calcRouter = Router();

calcRouter.all("*", auth);
calcRouter.post("/", validateBody(execCalcSchema), exec);

export default calcRouter;
