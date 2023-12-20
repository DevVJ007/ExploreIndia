const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../../config/db.config");
const UserImage = require('./UserImage');
const Review = require('./Reviews');
const Booking = require('./Bookings');
const Package = require('./Packages');
const User = sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  role: DataTypes.INTEGER,
  mobile: DataTypes.STRING,
  bio: DataTypes.STRING,
});
User.hasOne(UserImage, { foreignKey: 'user_id', as: 'user_image' });
UserImage.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
User.hasMany(Review, { foreignKey: 'user_id', as: 'reviews' });
Review.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
User.hasMany(Booking, { foreignKey: 'user_id', as: 'bookings' });
Booking.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
User.hasMany(Package, { foreignKey: 'user_id', as: 'packages' });
Package.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
module.exports = User;