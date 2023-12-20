class ApiError extends Error {
  constructor (statusCode, message, isOperational = true, stack = '') {
    super(`Oops! something went wrong. ${message}`.trim())
    this.statusCode = statusCode
    this.isOperational = isOperational
    if (stack) {
      this.stack = stack
    } else {
      Error.captureStackTrace(this, this.constructor)
    }
  }
}

module.exports = ApiError
