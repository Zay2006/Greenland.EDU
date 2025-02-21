const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // Log the error stack for debugging purposes

  res.status(err.statusCode || 500).json({
    success: false,
    error: {
      message: err.message || "Internal Server Error",
    },
  });
};

export default errorHandler;
