import MissingFieldError from "../../../utils/missingFieldError";
import RequestBodyError from "../../../utils/requestBodyError";
import { LBRequest } from "../scores.types";

const parseLBRequest = (query: unknown): LBRequest => {
    if (!(query && query instanceof Object)) throw new RequestBodyError();
    if (!("language" in query)) throw new MissingFieldError("Language");

    const parsedQuery = {
        language: parseLanguage(query.language),
    };
    return parsedQuery;
};

const parseLanguage = (language: unknown): string => {
    if (!isString(language)) throw new Error("Incorrect language format");

    return language;
};

const isString = (text: unknown): text is string => {
    return text instanceof String || typeof text === "string";
};

export default parseLBRequest;
