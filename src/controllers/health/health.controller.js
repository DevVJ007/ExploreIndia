'use strict'

const { printError } = require('../../utils/print-error.util')
const responseHelper = require('../../utils/response.util')
const { sequelize } = require('../../database/models')

module.exports.healthCheck = async (req, res, next) => {
    try {
        await sequelize.authenticate()
        responseHelper.data(res, {
            uptime: process.uptime(),
            server: 'OK',
            database: 'OK',
            timestamp: Date.now()
        })
    } catch (error) {
        next(printError('healthCheckError'))
    }
}