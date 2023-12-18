const express = require('express');
const router = express.Router();
const tagList = require('./tagList');
const package = require('./package');
router.use('/tag-list', tagList);
router.use('/package', package);
module.exports = router;