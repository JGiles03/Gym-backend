import { Router } from "express";
import exerciseController from "../controllers/exercises.js";

const userRouter = Router();

userRouter.get("/", exerciseController.index);

export default userRouter;