import MissingFieldError from "../../../utils/missingFieldError";
import RequestBodyError from "../../../utils/requestBodyError";
import { parseString } from "../../utils/parseFunctions";

interface NewUser {
    username: string;
    password: string;
}

const parseUser = (user: unknown): NewUser => {
    if (!(user && user instanceof Object)) throw new RequestBodyError();

    if (!("username" in user)) throw new MissingFieldError("Username");
    if (!("password" in user)) throw new MissingFieldError("Password");

    const newUser = {
        username: parseString(user.username, "username"),
        password: parseString(user.password, "password"),
    };

    return newUser;
};

export default parseUser;
