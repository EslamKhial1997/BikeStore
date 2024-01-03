const globalError = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  if (process.env.NODE_ENV === "devolpment") {
    ApiErrorDev(err, res);
  } else {
    ApiErrorProduction(err, res);
  }
};
const ApiErrorDev = (err, res) => {
return  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};
const ApiErrorProduction = (err, res) => {
 return res.status(err.statusCode).json({
    status: err.status,

    message: err.message,
  });
};
module.exports = globalError;
