import { LBRequest } from "../scores.types";

const parseLBRequest = (body: unknown): LBRequest => {
    if (!(body && body instanceof Object))
        throw new Error("Request does not contain body");
    if (!("language" in body)) throw new Error("Language field missing");

    const parsedBody = {
        language: parseLanguage(body.language),
    };
    return parsedBody;
};

const parseLanguage = (language: unknown): string => {
    if (!isString(language)) throw new Error("Incorrect language format");

    return language;
};

const isString = (text: unknown): text is string => {
    return text instanceof String || typeof text === "string";
};

export default parseLBRequest;
