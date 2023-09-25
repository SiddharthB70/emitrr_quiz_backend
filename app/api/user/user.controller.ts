import { Request, Response } from "express";
import toNewUser from "./utils/toNewUser";
import User from "../../models/userModel";
import bcrypt from "bcrypt";

export const createNewUser = async (req: Request, res: Response) => {
    const body = toNewUser(req.body);
    const passwordHash = await bcrypt.hash(body.password, 10);
    const newUser = new User({
        username: body.username,
        passwordHash: passwordHash,
        proficiency: "amateur",
    });

    const registeredUser = await newUser.save();
    res.status(201).send(registeredUser);
};
