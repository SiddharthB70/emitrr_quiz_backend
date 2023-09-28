class AuthorizationError extends Error {
    constructor() {
        super();
        this.name = "AuthorizationError";
        this.message = "Unauthorized Access";
    }
}
export default AuthorizationError;
