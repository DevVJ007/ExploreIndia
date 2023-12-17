const express = require('express');
const router = express.Router();
const tagList = require('./tagList');

router.use('/tag-list', tagList);

module.exports = router;