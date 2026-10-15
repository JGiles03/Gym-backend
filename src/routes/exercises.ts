import { Router } from "express";
import exerciseController from "../controllers/exercises.ts";

const exerciseRouter = Router();

exerciseRouter.get("/", exerciseController.index);
exerciseRouter.get("/:id", exerciseController.getById);

export default exerciseRouter;