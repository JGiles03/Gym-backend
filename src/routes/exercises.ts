import { Router } from "express";
import exerciseController from "../controllers/exercises.ts";

const exerciseRouter = Router();

exerciseRouter.get("/", exerciseController.index);

export default exerciseRouter;