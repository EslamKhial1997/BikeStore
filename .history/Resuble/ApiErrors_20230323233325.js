class ApiError extends Error {
    constructor(message , statusCode){
        super(massages)
        this.statusCode = statusCode
        this.status = `${statusCode}`.startsWith(4) ? "fail" : "error";
        this.Operations = true
    }
}

module.exports = ApiError