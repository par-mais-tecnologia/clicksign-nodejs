module.exports = class AppError extends Error {
  constructor (message, httpCode, description, isOperational) {
    super(message);

    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
    this.httpCode = httpCode || 500;
    this.description = description
    this.isOperational = isOperational
  }
};