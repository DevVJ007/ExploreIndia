// Importing necessary modules
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config(true);
const sequelize = require('./config/db.config');

// Connecting to the database
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
// Health route
app.get('/health', (req, res) => {
  res.send('Hey buddy,\nI am good.\nHow are you?');
});

// Login route
app.get('/login', (req, res) => {
  res.send('Congratulations, you are logged in!');
});

// Listening to the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
