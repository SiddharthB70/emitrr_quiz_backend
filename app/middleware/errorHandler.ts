import { NextFunction, Request, Response } from "express";
import AuthorizationError from "../utils/authorizationError";
import logger from "../utils/logger";
import UniqueError from "../utils/uniqueError";
import MissingFieldError from "../utils/missingFieldError";
import RequestBodyError from "../utils/requestBodyError";
import FormatError from "../utils/formatError";

const errorHandler = (
    error: unknown,
    _req: Request,
    res: Response,
    next: NextFunction,
) => {
    if (error instanceof AuthorizationError) {
        return res.status(401).json(error.message);
    } else if (error instanceof UniqueError) {
        return res.status(409).json(error.message);
    } else if (
        error instanceof MissingFieldError ||
        error instanceof RequestBodyError ||
        error instanceof FormatError ||
        error instanceof SyntaxError
    ) {
        return res.status(400).json(error.message);
    } else if (error instanceof Error) {
        logger.error(error.name);
        logger.error(error.message);
        return res.status(500).send();
    }

    next(error);
    return;
};

export default errorHandler;
