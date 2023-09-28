import MissingFieldError from "../../../utils/missingFieldError";
import RequestBodyError from "../../../utils/requestBodyError";

interface NewUser {
    username: string;
    password: string;
}

const parseUser = (user: unknown): NewUser => {
    if (!(user && user instanceof Object)) throw new RequestBodyError();

    if (!("username" in user)) throw new MissingFieldError("Username");
    if (!("password" in user)) throw new MissingFieldError("Password");

    const newUser = {
        username: parseUsername(user.username),
        password: parsePassword(user.password),
    };

    return newUser;
};

const parseUsername = (value: unknown): string => {
    if (!isString(value)) throw new Error("Invalid Username format");
    return value;
};

const parsePassword = (value: unknown): string => {
    if (!isString(value)) throw new Error("Invalid Password format");
    return value;
};

const isString = (text: unknown): text is string => {
    return text instanceof String || typeof text === "string";
};

export default parseUser;
