class ApiError extends Error {
    constructor(massage , statusCode){
       
        super(massage)
        this.statusCode = statusCode
        this.status = `${statusCode}`.startsWith(4) ? "fail" : "error";
        this.Operations = true;
        this.message = message
    }
}

module.exports = ApiError