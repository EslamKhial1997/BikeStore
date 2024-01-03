class ApiError extends Error {
    constructor(massage , StatusCode){
        super(massage)
        this.statusCode = StatusCode
        this.status = massage;
        this.Operation = true
    }
}

module.exports = ApiError