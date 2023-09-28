import { Types, isValidObjectId } from "mongoose";
import { Difficulty } from "../../../types";
import { IGetQuestionBody } from "../questions.types";
import MissingFieldError from "../../../utils/missingFieldError";
import RequestBodyError from "../../../utils/requestBodyError";

const parseGetQuestion = (body: unknown): IGetQuestionBody => {
    if (!(body && body instanceof Object)) throw new RequestBodyError();

    if (!("difficulty" in body)) throw new MissingFieldError("Difficulty");
    if (!("language" in body)) throw new MissingFieldError("Language");
    if (!("limit" in body)) throw new MissingFieldError("Limit");
    if (!("exclude" in body)) throw new MissingFieldError("Exclude");

    const parsedBody = {
        difficulty: parseDifficulty(body.difficulty),
        language: parseLanguage(body.language),
        limit: parseLimit(body.limit),
        exclude: parseExclude(body.exclude),
    };

    return parsedBody;
};

const parseDifficulty = (difficulty: unknown): Difficulty => {
    if (!isNumber(difficulty) || !isDifficulty(difficulty))
        throw new Error("Incorrect value for difficulty");
    return difficulty;
};

const isDifficulty = (difficulty: number): difficulty is Difficulty => {
    return [1, 2, 3].includes(difficulty);
};

const parseLimit = (score: unknown): number => {
    if (!isNumber(score)) throw new Error("Incorrect format for Limit");
    return score;
};

const isNumber = (number: unknown): number is number => {
    return number instanceof Number || typeof number === "number";
};

const parseLanguage = (language: unknown): string => {
    if (!isString(language)) throw new Error("Incorrect format for score");
    return language;
};

const isString = (text: unknown): text is string => {
    return text instanceof String || typeof text === "string";
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
