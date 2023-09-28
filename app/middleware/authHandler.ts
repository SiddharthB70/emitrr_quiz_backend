import { NextFunction, Request, Response } from "express";
import AuthorizationError from "../utils/authorizationError";

const authHandler = (req: Request, _res: Response, next: NextFunction) => {
    if (!req.session || !req.session.clientId) {
        throw new AuthorizationError();
    }

    next();
    return;
};

export default authHandler;
