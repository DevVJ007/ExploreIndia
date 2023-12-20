"use strict";

const router = require("express").Router();

const userController = require("./user.controller");

router.post("/", userController.register);

module.exports = router;
