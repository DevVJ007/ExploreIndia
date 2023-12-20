'use strict'

const Sequelize = require('sequelize')
const httpStatus = require('http-status')
const ApiError = require('../utils/api-error.util')

const errorConverter = (err, req, res, next) => {
  let error = err
  if (!(error instanceof ApiError)) {
    const statusCode =
      error.statusCode || error instanceof Sequelize.Error ? httpStatus.BAD_REQUEST : httpStatus.INTERNAL_SERVER_ERROR
    const message = error.message || httpStatus[statusCode]
    error = new ApiError(statusCode, message, false, err.stack)
  }
  next(error)
}

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  let { statusCode, message } = err
  console.log(httpStatus[httpStatus.INTERNAL_SERVER_ERROR])
  if (process.env.NODE_ENV === 'production' && !err.isOperational) {
    statusCode = httpStatus.INTERNAL_SERVER_ERROR
    message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR]
  }

  res.locals.errorMessage = err.message

  const response = {
    is_success: false,
    message,
    responseCode: statusCode,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  }

  if (process.env.NODE_ENV === 'development') {
    console.error(err)
  }

  res.status(statusCode).send(response)
}

module.exports = {
  errorConverter,
  errorHandler
}