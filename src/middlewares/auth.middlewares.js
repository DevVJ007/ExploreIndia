const { AvailableUserRoles, ACTIVE } = require("../utils/constants.js");
const user = require("../database/models/auth/user.models.js");
const { ApiError } = require("../utils/ApiError.js");
const { asyncHandler } = require("../utils/asyncHandler.js");
const jwt = require("jsonwebtoken");
const { auth_services } = require("../services/index.js");

const verifyJWT = asyncHandler(async (req, res, next) => {
  const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    throw new ApiError(401, "Unauthorized request");
  }

  try {
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    console.log(decodedToken, "decodedToken");
    const user = await auth_services.getUser({
      where: { uuid: decodedToken?.uuid, status: ACTIVE },
      attributes: { exclude: ["password", "refreshToken", "emailVerificationToken", "emailVerificationExpiry"] },
      raw: true,
    });
    if (!user) {
      // Client should make a request to /api/v1/users/refresh-token if they have refreshToken present in their cookie
      // Then they will get a new access token which will allow them to refresh the access token without logging out the user
      throw new ApiError(401, "Invalid access token");
    }
    req.user = user;
    next();
  } catch (error) {
    // Client should make a request to /api/v1/users/refresh-token if they have refreshToken present in their cookie
    // Then they will get a new access token which will allow them to refresh the access token without logging out the user
    throw new ApiError(401, error?.message || "Invalid access token");
  }
});

/**
 *
 * @description Middleware to check logged in users for unprotected routes. The function will set the logged in user to the request object and, if no user is logged in, it will silently fail.
 *
 * `NOTE: THIS MIDDLEWARE IS ONLY TO BE USED FOR UNPROTECTED ROUTES IN WHICH THE LOGGED IN USER'S INFORMATION IS NEEDED`
 */
const getLoggedInUserOrIgnore = asyncHandler(async (req, res, next) => {
  const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");

  try {
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decodedToken?.uuid).select("-password -refreshToken -emailVerificationToken -emailVerificationExpiry");
    req.user = user;
    next();
  } catch (error) {
    // Fail silently with req.user being falsy
    next();
  }
});

/**
 * @param {AvailableUserRoles} roles
 * @description
 * * This middleware is responsible for validating multiple user role permissions at a time.
 * * So, in future if we have a route which can be accessible by multiple roles, we can achieve that with this middleware
 */
const verifyPermission = (roles = []) =>
  asyncHandler(async (req, res, next) => {
    if (!req.user?.uuid) {
      throw new ApiError(401, "Unauthorized request");
    }
  });

module.exports = {
  verifyJWT,
  getLoggedInUserOrIgnore,
  verifyPermission,
};
