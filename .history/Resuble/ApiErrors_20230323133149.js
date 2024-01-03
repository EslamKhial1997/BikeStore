class ApiError extends Error {
    constructor(massage , StatusCode){
        super(massage)
        this.statusCode = statusCode
        this.status = `${statusCode}`.startsWith(4) ? "fail" : "error";
        this.Operations = true
    }
}

module.exports = ApiError