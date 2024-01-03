class ApiError extends Error {
    constructor(massage , statusCode){
        console.log(massage);
        super(massage)
        this.statusCode = statusCode
        this.status = `${statusCode}`.startsWith(4) ? "fail" : "error";
        this.Operations = true
    }
}

module.exports = ApiError