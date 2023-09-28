import { Router } from "express";
import { registerUser, loginUser, checkLoggedIn } from "./user.controller";

const userRouter = Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/loggedIn", checkLoggedIn);

export default userRouter;
