class ApiError extends Error {
    constructor(massage , StatusCode){
        super(massage)
        this.statusCode = StatusCode
        this.status = `${s}`;
        this.Operation = true
    }
}

module.exports = ApiError