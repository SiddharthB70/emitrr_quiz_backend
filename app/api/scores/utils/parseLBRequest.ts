import MissingFieldError from "../../../utils/missingFieldError";
import RequestBodyError from "../../../utils/requestBodyError";
import { parseString } from "../../utils/parseFunctions";
import { LBRequest } from "../scores.types";

const parseLBRequest = (query: unknown): LBRequest => {
    if (!(query && query instanceof Object)) throw new RequestBodyError();
    if (!("language" in query)) throw new MissingFieldError("Language");

    const parsedQuery = {
        language: parseString(query.language, "language"),
    };
    return parsedQuery;
};

export default parseLBRequest;
