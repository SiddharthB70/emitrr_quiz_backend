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

    const parsedBody = {
        difficulty: parseDifficulty(Number(body.difficulty)),
        language: parseString(body.language, "language"),
        limit: parseNumber(Number(body.limit), "limit"),
    };

    return parsedBody;
};

export default parseGetQuestion;
