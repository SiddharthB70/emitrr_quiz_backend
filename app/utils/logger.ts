const info = (message: string) => {
    if (process.env.NODE_ENV === "development") console.info(message);
};

const error = (message: string) => {
    if (process.env.NODE_ENV === "development") console.error(message);
};

export default { info, error };
