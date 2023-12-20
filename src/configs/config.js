const dotenv = require("dotenv");
const path = require("path");
const Joi = require("joi");

dotenv.config({ path: path.join(__dirname, "../../.env") });

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string()
      .valid("production", "development", "test")
      .required(),
    PORT: Joi.number().default(3000),
    DEV_DB_PORT: Joi.string().required().description("Dev Database port"),
    DEV_DB_USER: Joi.string().required().description("Dev Database user"),
    DEV_DB_PASSWORD: Joi.string()
      .required()
      .description("Dev Database password"),
    DEV_DB_NAME: Joi.string().required().description("Dev Database name"),
    DEV_DB_HOST: Joi.string().required().description("Dev Database host"),
    DEV_DB_DIALECT: Joi.string()
      .default("mysql")
      .required()
      .description("Dev Database dialect"),
    PROD_DB_PORT: Joi.string().required().description("Prod Database port"),
    PROD_DB_USER: Joi.string().required().description("Prod Database user"),
    PROD_DB_PASSWORD: Joi.string()
      .required()
      .description("Prod Database password"),
    PROD_DB_NAME: Joi.string().required().description("Prod Database name"),
    PROD_DB_HOST: Joi.string().required().description("Prod Database host"),
    PROD_DB_DIALECT: Joi.string()
      .default("mysql")
      .required()
      .description("Prod Database dialect"),
    ACCESS_TOKEN_SECRET: Joi.string()
      .required()
      .description("Access token secret key"),
    REFRESH_TOKEN_SECRET: Joi.string()
      .required()
      .description("Refresh token secret key"),
    JWT_ACCESS_EXPIRATION_MINUTES: Joi.number()
      .default(30)
      .description("minutes after which access tokens expire"),
    JWT_REFRESH_EXPIRATION_DAYS: Joi.number()
      .default(30)
      .description("days after which refresh tokens expire"),
    JWT_RESET_PASSWORD_EXPIRATION_MINUTES: Joi.number()
      .default(10)
      .description("minutes after which reset password token expires"),
    JWT_VERIFY_EMAIL_EXPIRATION_MINUTES: Joi.number()
      .default(10)
      .description("minutes after which verify email token expires"),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  database: {
    development: {
      username: envVars.DEV_DB_USER,
      password: envVars.DEV_DB_PASSWORD,
      host: envVars.DEV_DB_HOST,
      database: envVars.DEV_DB_NAME,
      port: envVars.DEV_DB_PORT,
      dialect: envVars.DEV_DB_DIALECT,
      migrationStorageTableName: "sequelize_meta",
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
      logging: console.log,
    },
    production: {
      username: envVars.PROD_DB_USER,
      password: envVars.PROD_DB_PASSWORD,
      host: envVars.PROD_DB_HOST,
      database: envVars.PROD_DB_NAME,
      port: envVars.PROD_DB_PORT,
      dialect: envVars.PROD_DB_DIALECT,
      migrationStorageTableName: "sequelize_meta",
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
      logging: console.log,
    },
  },
};