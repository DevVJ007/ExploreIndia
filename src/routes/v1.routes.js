'use strict'

const router = require('express').Router()
const path = require('path')

const fs = require('fs')
const controllers = path.join(__dirname, '/../controllers')

fs.readdirSync(controllers).forEach(dir => router.use(`/${dir}`, require(`${controllers}/${dir}`)))

module.exports = router