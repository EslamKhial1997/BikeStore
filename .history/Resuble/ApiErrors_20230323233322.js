class ApiError extends Error {
    constructor(messages , statusCode){
        super(massages)
        this.statusCode = statusCode
        this.status = `${statusCode}`.startsWith(4) ? "fail" : "error";
        this.Operations = true
    }
}

module.exports = ApiError