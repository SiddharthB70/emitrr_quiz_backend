import { Request, Response, NextFunction } from "express";
import AuthorizationError from "../utils/authorizationError";
import logger from "../utils/logger";

const errorHandler = (
    error: unknown,
    _req: Request,
    res: Response,
    next: NextFunction,
) => {
    if (error instanceof AuthorizationError) {
        return res.status(401).json(error.message);
    } else if (error instanceof Error) {
        return logger.error(error.message);
    }

    next(error);
    return;
};

export default errorHandler;
