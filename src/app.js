require("dotenv").config("../.env");
const cors = require("cors");
const express = require("express");
const {
  errorConverter,
  errorHandler,
} = require("./middlewares/error.middlewares.js");

const app = express();

// global middlewares
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health route
app.get('/health', (req, res) => {
  res.send('Hey buddy,\nI am good.\nHow are you?');
});

app.use("/api", require("./routes/v1.routes"));

// common error handling middleware
app.use(errorConverter, errorHandler);

module.exports = app;
