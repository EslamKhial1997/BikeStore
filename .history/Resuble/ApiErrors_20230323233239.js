class ApiError extends Error {
    constructor(massage , statusCode){
        
        this.statusCode = statusCode
        this.status = `${statusCode}`.startsWith(4) ? "fail" : "error";
        this.Operations = true
        this.massage = massage
    }
}

module.exports = ApiError