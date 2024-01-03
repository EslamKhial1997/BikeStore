const globleError = (err , req , res , next)=>{
err.statusCode = err.statusCode || 500;
err.status = err.status ||"error"
console.log(err);
res.status(err.statusCode).json({
    error: err , 
    status:err.status ,
    message:err.message
    stack:err.stack ,
})
}
module.exports = globleError