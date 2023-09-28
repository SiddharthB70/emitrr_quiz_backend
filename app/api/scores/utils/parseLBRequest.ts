import { LBRequest } from "../scores.types";

const parseLBRequest = (query: unknown): LBRequest => {
    if (!(query && query instanceof Object))
        throw new Error("Request does not contain query");
    if (!("language" in query)) throw new Error("Language field missing");

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
