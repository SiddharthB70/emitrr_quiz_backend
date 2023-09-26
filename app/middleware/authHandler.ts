import { NextFunction, Request, Response } from "express";

const authHandler = (req: Request, res: Response, next: NextFunction) => {
    if (!req.session || !req.session.clientId) {
        return res
            .status(401)
            .json({ type: "error", message: "Unauthorized access" });
    }

    next();
    return;
};

export default authHandler;
