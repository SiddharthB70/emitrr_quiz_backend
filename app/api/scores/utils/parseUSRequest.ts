import MissingFieldError from "../../../utils/missingFieldError";
import RequestBodyError from "../../../utils/requestBodyError";
import {
    parseDifficulty,
    parseNumber,
    parseString,
} from "../../utils/parseFunctions";
import { USRequest } from "../scores.types";

const parseUSRequest = (body: unknown): USRequest => {
    if (!(body && body instanceof Object)) throw new RequestBodyError();

    if (!("language" in body)) throw new MissingFieldError("Language");
    if (!("score" in body)) throw new MissingFieldError("Score");
    if (!("proficiency" in body)) throw new MissingFieldError("Proficiency");

    const parsedBody: USRequest = {
        language: parseString(body.language, "language"),
        proficiency: parseDifficulty(body.proficiency),
        score: parseNumber(body.score, "score"),
    };

    return parsedBody;
};

export default parseUSRequest;
