class ApiError extends Error {
    constructor(massage , StatusCode){
        super(massage)
        this.statusCode = StatusCode
        this.status = `${statusCode}`.startsWith(4) ? "fail" : "error";
        this.Operations = true
    }
}

module.exports = ApiError