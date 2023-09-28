class RequestBodyError extends Error {
    constructor() {
        super();
        (this.name = "Request Body Error"),
            (this.message = "Request does not contain body");
    }
}

export default RequestBodyError;
