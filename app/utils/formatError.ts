class FormatError extends Error {
    constructor(field: string) {
        super();
        this.name = "Invalid Field Format";
        this.message = `Invalid ${field} format`;
    }
}

export default FormatError;
