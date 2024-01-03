class ApiError extends Error {
    constructor(massages , statusCode){
        
        this.statusCode = statusCode
        this.status = `${statusCode}`.startsWith(4) ? "fail" : "error";
        this.Operations = true
        this.message = 
    }
}

module.exports = ApiError