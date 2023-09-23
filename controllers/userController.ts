import { Router } from "express";
import toNewUser from "../utils/toNewUser";
import bcrypt from "bcrypt";
import User from "../models/userModel";

const userRouter = Router();

userRouter.post("/", async (req, res) => {
    const body = toNewUser(req.body);
    const passwordHash = await bcrypt.hash(body.password, 10);
    const newUser = new User({
        username: body.username,
        passwordHash: passwordHash,
        proficiency: "amateur",
    });

    const registeredUser = await newUser.save();
    res.status(201).send(registeredUser);
});

export default userRouter;
