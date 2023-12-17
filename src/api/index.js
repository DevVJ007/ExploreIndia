const express = require('express');
const router = express.Router();
const public = require('./public');

router.use('/', public);

module.exports = router;