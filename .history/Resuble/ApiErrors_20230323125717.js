class ApiError extends Error {
    constructor(massage , StatusCode){
        super(massage)
        this.statusCode = StatusCode
        this.sta = massage;
        this.Operation = true
    }
}

module.exports = ApiError