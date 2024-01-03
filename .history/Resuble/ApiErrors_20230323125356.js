class ApiError extends Error {
    constructor(massage , StatusCode){
        super(massage)
        this.statusCode = StatusCode,
    }
}