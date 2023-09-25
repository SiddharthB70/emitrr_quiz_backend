import { Router } from "express";
import { createNewUser } from "./user.controller";
const userRouter = Router();

userRouter.post("/", createNewUser);

export default userRouter;
