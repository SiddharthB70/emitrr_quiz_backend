interface GetQuestion {
    score: number;
    language: string;
}

const parseGetQuestion = (body: unknown): GetQuestion => {
    if (!(body && body instanceof Object))
        throw new Error("Request does not contain body");

    if (!("score" in body)) throw new Error("Score unavailable");
    if (!("language" in body)) throw new Error("Language unavailable");

    const parsedBody = {
        score: parseScore(body.score),
        language: parseLanguage(body.language),
    };

    return parsedBody;
};

const parseScore = (score: unknown): number => {
    if (!isNumber(score)) throw new Error("Incorrect format for score");
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

export default parseGetQuestion;
