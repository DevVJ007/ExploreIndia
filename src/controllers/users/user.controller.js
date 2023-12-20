"use strict";

const { printError } = require("../../utils/print-error.util");
const responseHelper = require("../../utils/response.util");
const { userServices } = require("../../services");
const catchAsync = require("../../utils/catch-async.util");

const register = catchAsync(async (req, res, next) => {
  await userServices.create(req.body);
  responseHelper.success(res, "User created successfully");
});

module.exports = {
  register,
};
