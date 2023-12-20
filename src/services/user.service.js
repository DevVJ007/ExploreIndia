"use strict";

const { User } = require("../database/models");

const create = async (requestBody) =>
  await User.create(requestBody);

module.exports = {
  create,
};
