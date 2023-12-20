"use strict";

const router = require("express").Router();

const healthController = require("./health.controller");

router.get("/", healthController.healthCheck);

module.exports = router;
