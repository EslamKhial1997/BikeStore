const globleError = (err , req , res , next)=>{
err.statusCode = err.statusCode || 500;
err.status = err.status ||"error"

res.stat
}