const globalError = (err , req , res , next)=>{
err.statusCode = err.statusCode || 500;
err.status = err.status ||"error"
if (process.env.NODE_ENV === "devolopment") {
    ApiErrorDev(err , res)
}

}
const ApiErrorDev = (err , res)=>{
    res.status(err.statusCode).json({
        status:err.status ,
        error: err , 
        message:err.message,
        stack:err.stack ,
    })
}
const ApiErrorDev = (err , res)=>{
    res.status(err.statusCode).json({
        status:err.status ,
        error: err , 
        message:err.message,
        stack:err.stack ,
    })
}
module.exports = globalError