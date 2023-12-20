'use strict'

const fs = require('fs')
const util = require('util')
const path = require('path')
// write the logs to stdout
const serverLog = process.stdout
const ErrorLog = process.stdout
const logOutput = process.stdout

// the flag 'a' will update the stream log at every launch
console.log = (e) => {
  const dateTime = new Date()
  serverLog.write(`[${dateTime}]: ` + util.format(e) + '\n')
  logOutput.write(`[${dateTime}]: ` + util.format(e) + '\n')
}

console.error = (e) => {
  const dateTime = new Date()
  ErrorLog.write(`[${dateTime}]: ` + util.format(e) + '\n')
}

module.exports = { console }
