import { Difficulty } from "../../../types";
import MissingFieldError from "../../../utils/missingFieldError";
import RequestBodyError from "../../../utils/requestBodyError";
import { USRequest } from "../scores.types";

const parseUSRequest = (body: unknown): USRequest => {
    if (!(body && body instanceof Object)) throw new RequestBodyError();

    if (!("language" in body)) throw new MissingFieldError("Language");
    if (!("score" in body)) throw new MissingFieldError("Score");
    if (!("proficiency" in body)) throw new MissingFieldError("Proficiency");

    const parsedBody: USRequest = {
        language: parseLanguage(body.language),
        proficiency: parseProficiency(body.proficiency),
        score: parseScore(body.score),
    };

    return parsedBody;
};

const parseLanguage = (language: unknown): string => {
    if (!isString(language)) throw new Error("Invalid language format");
    return language;
};

const isString = (text: unknown): text is string => {
    return text instanceof String || typeof text === "string";
};

const parseProficiency = (proficiency: unknown): Difficulty => {
    if (!isNumber(proficiency) || !isProficiency(proficiency))
        throw new Error("Invalid proficiency format");
    return proficiency;
};

const parseScore = (val: unknown): number => {
    if (!isNumber(val)) throw new Error("Invalid score format");
    return val;
};

const isNumber = (val: unknown): val is number => {
    return val instanceof Number || typeof val === "number";
};

const isProficiency = (num: number): num is Difficulty => {
    return [1, 2, 3].includes(num);
};

export default parseUSRequest;
