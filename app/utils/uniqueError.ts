class UniqueError extends Error {
    constructor(field: string) {
        super();
        this.name = "Unique Error";
        this.message = `${field} already exists`;
    }
}

export default UniqueError;
