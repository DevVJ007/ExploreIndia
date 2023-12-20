const express = require('express');
const router = express.Router();
const tagListRoutes = require('./tagList');
const packageRoutes = require('./package');

// all taglist routes
router.get('/tag-list', tagListRoutes.getAllPackages);

// all package routes
router.get('/package/:id', packageRoutes.getById);

module.exports = router;