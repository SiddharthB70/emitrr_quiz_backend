interface NewUser {
    username: string;
    password: string;
}

const parseUser = (user: unknown): NewUser => {
    if (!(user && user instanceof Object))
        throw new Error("Request does not contain body");

    if (!("username" in user)) throw new Error("Username unavailable");
    if (!("password" in user)) throw new Error("Password unavailable");

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
