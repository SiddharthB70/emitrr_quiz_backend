import { Types, isValidObjectId } from "mongoose";
import { IGetQuestionBody } from "../questions.types";
import MissingFieldError from "../../../utils/missingFieldError";
import RequestBodyError from "../../../utils/requestBodyError";
import {
    parseDifficulty,
    parseNumber,
    parseString,
} from "../../utils/parseFunctions";

const parseGetQuestion = (body: unknown): IGetQuestionBody => {
    if (!(body && body instanceof Object)) throw new RequestBodyError();

    if (!("difficulty" in body)) throw new MissingFieldError("Difficulty");
    if (!("language" in body)) throw new MissingFieldError("Language");
    if (!("limit" in body)) throw new MissingFieldError("Limit");
    if (!("exclude" in body)) throw new MissingFieldError("Exclude");

    const parsedBody = {
        difficulty: parseDifficulty(body.difficulty),
        language: parseString(body.language, "language"),
        limit: parseNumber(body.limit, "limit"),
        exclude: parseExclude(body.exclude),
    };

    return parsedBody;
};

const parseExclude = (exclude: unknown): Types.ObjectId[] => {
    if (!(exclude instanceof Array) || !isObjectIdArray(exclude))
        throw new Error("Incorrect object ids");

    return exclude.map((id) => new Types.ObjectId(id));
};

const isObjectIdArray = (
    exclude: Array<unknown>,
): exclude is Types.ObjectId[] => {
    return exclude.every((val) => isValidObjectId(val));
};

export default parseGetQuestion;
