class ApiError extends Error {
    constructor(massage , StatusCode){
        super(massage)
        this.statusCode = StatusCode
        this.status = `${statusCode}`;
        this.Operation = true
    }
}

module.exports = ApiError