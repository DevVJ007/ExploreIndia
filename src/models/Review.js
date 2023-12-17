const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('./connection');
const Review = sequelize.define('reviews', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: DataTypes.INTEGER,
    package_id: DataTypes.INTEGER,
    review: DataTypes.STRING,
    rating: DataTypes.INTEGER
});
module.exports = Review;