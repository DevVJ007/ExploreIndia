'use strict'

const ApiError = require('./api-error.util')

const errors = require('../configs/errors.config')

const printError = (errorKey = 'default') => {
  const error = (errors[errorKey]) ? errors[errorKey] : errors.default
  return new ApiError(error.statusCode, error.message)
}

module.exports = {
  printError
}
