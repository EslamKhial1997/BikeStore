const globleError = (err , req , res , next)=>{
err.statusCode = err.statusCode || 500;
}