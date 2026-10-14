import express from "express";
import cors from "cors";
import userRouter from "./routes/users.ts";
import exerciseRouter from "./routes/exercises.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users/", userRouter)
app.use("/exercises/", exerciseRouter)

export default app;