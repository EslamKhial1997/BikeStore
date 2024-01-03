const globalError = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  if (process.env.NODE_ENV === "devolopment") {
  
    ApiErrorProduction(err, res);
  } else {
    ApiErrorDev(err, res);
  }
};
const ApiErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};
const ApiErrorProduction = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,

    message: err.message,
  });
};
module.exports = globalError;
