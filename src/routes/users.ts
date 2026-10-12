import { Router } from "express";
import userController from "../controllers/users.js";

const userRouter = Router();

userRouter.get("/", userController.index);
userRouter.get("/:name", userController.getByName);

export default userRouter;