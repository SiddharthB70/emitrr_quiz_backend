import { Request, Response, NextFunction } from "express";
const errorHandler = (
    error: unknown,
    _req: Request,
    res: Response,
    next: NextFunction,
) => {
    if (error instanceof Error) {
        return res.status(401).json(error.message);
    }

    next(error);
    return;
};

export default errorHandler;
