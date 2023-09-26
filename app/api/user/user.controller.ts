import { Request, Response } from "express";
import parseUser from "./utils/parseUser";
import User from "./user.model";
import bcrypt from "bcrypt";

export const registerUser = async (req: Request, res: Response) => {
    const body = parseUser(req.body);
    const passwordHash = await bcrypt.hash(body.password, 10);
    const newUser = new User({
        username: body.username,
        passwordHash: passwordHash,
    });
    const registeredUser = await newUser.save();
    res.status(201).json({ type: "success", user: registeredUser });
};

export const loginUser = async (req: Request, res: Response) => {
    const body = parseUser(req.body);
    const databaseUser = await User.findOne({ username: body.username });
    const passwordValid = databaseUser
        ? await bcrypt.compare(body.password, databaseUser.passwordHash)
        : false;
    if (!passwordValid)
        return res
            .status(401)
            .json({ type: "error", message: "incorrect credentials" });
    if (databaseUser) req.session.clientId = databaseUser._id.toString();

    return res
        .status(200)
        .json({ type: "success", message: "logged in", user: databaseUser });
};
