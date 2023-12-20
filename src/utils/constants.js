// Declare and define the variables
const UserRolesEnum = {
  ADMIN: "ADMIN",
  USER: "USER",
};
const AvailableUserRoles = Object.values(UserRolesEnum);

const PostTypeEnum = {
  IMAGE: "IMAGE",
  VIDEO: "VIDEO",
  LINK: "LINK",
};

const AvailablePostType = Object.values(PostTypeEnum);

const OrderStatusEnum = {
  PENDING: "PENDING",
  CANCELLED: "CANCELLED",
  DELIVERED: "DELIVERED",
};
const AvailableOrderStatuses = Object.values(OrderStatusEnum);

const PaymentProviderEnum = {
  UNKNOWN: "UNKNOWN",
  RAZORPAY: "RAZORPAY",
  PAYPAL: "PAYPAL",
};
const AvailablePaymentProviders = Object.values(PaymentProviderEnum);

const CouponTypeEnum = {
  FLAT: "FLAT",
  // PERCENTAGE: "PERCENTAGE",
};
const AvailableCouponTypes = Object.values(CouponTypeEnum);

const UserLoginType = {
  GOOGLE: "GOOGLE",
  EMAIL_PASSWORD: "EMAIL_PASSWORD",
};
const AvailableSocialLogins = Object.values(UserLoginType);

const USER_TEMPORARY_TOKEN_EXPIRY = 20 * 60 * 1000; // 20 minutes
const MAXIMUM_SUB_IMAGE_COUNT = 4;
const MAXIMUM_SOCIAL_POST_IMAGE_COUNT = 6;
const DB_NAME = "social_spark";
const ACTIVE = 1;
const DELETED = 0;

// Export all variables in a single object
module.exports = {
  ACTIVE,
  DELETED,
  UserRolesEnum,
  AvailableUserRoles,
  PostTypeEnum,
  AvailablePostType,
  OrderStatusEnum,
  AvailableOrderStatuses,
  PaymentProviderEnum,
  AvailablePaymentProviders,
  CouponTypeEnum,
  AvailableCouponTypes,
  UserLoginType,
  AvailableSocialLogins,
  USER_TEMPORARY_TOKEN_EXPIRY,
  MAXIMUM_SUB_IMAGE_COUNT,
  MAXIMUM_SOCIAL_POST_IMAGE_COUNT,
  DB_NAME,
};
