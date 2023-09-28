class MissingFieldError extends Error {
    constructor(field: string) {
        super();
        this.name = "Missing field";
        this.message = `${field} field missing`;
    }
}

export default MissingFieldError;
