const globalError = (err , req , res , next)=>{
err.statusCode = err.statusCode || 500;
err.status = err.status ||"error"
if (condition) {
    console.log(err);
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
module.exports = globalError