class ApiError extends Error {
    constructor(massage , statusCode){
        
        this.statusCode = statusCode
        this.status = `${statusCode}`.startsWith(4) ? "fail" : "error";
        this.Operations = true
        this.message = massage
    }
}

module.exports = ApiError