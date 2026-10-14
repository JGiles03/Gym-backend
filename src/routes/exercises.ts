import { Router } from "express";
import exerciseController from "../controllers/exercises.ts";

const userRouter = Router();

userRouter.get("/", exerciseController.index);

export default userRouter;