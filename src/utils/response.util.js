'use strict'
const fs = require('fs')
// const fsPromises = require('fs').promises

const success = (res, message, code = 200) => {
  res.status(code).json({
    is_success: true,
    message,
    responseCode: code
  })
}

const data = (res, data, code = 200) => {
  res.status(code).json({
    is_success: true,
    data,
    responseCode: code
  })
}

const rawResponse = (res, data, code = 200) => {
  res.status(code).json(data)
}

const token = (res, token, code = 200) => {
  res.status(code).json({
    is_success: true,
    token,
    responseCode: code
  })
}

module.exports = {
  success,
  data,
  rawResponse,
  token
}
