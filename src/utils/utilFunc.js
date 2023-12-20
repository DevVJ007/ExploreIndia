const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const crypto = require("crypto");
const { USER_TEMPORARY_TOKEN_EXPIRY } = require("./constants");
const generateTemporaryToken = () => {
  // This token should be client facing
  // for example: for email verification unHashedToken should go into the user's mail
  const unHashedToken = crypto.randomBytes(20).toString("hex");

  // This should stay in the DB to compare at the time of verification
  const hashedToken = crypto.createHash("sha256").update(unHashedToken).digest("hex");
  // This is the expiry time for the token (20 minutes)
  const tokenExpiry = Date.now() + USER_TEMPORARY_TOKEN_EXPIRY;

  return { unHashedToken, hashedToken, tokenExpiry };
};

const doHash = async (text) => {
  return await bcrypt.hash(text, saltRounds);
};

const compare = async (text, hash) => {
  return await bcrypt.compare(text, hash);
};

const generateAccessToken = (data) => {
  console.log(data, "data");
  return jwt.sign({ ...data }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1d" });
};

const generateRefreshToken = (data) => {
  return jwt.sign({ ...data }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "10d" });
};

module.exports = {
  generateTemporaryToken,
  doHash,
  compare,
  generateAccessToken,
  generateRefreshToken,
};
