const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require("../../config/db.config");
const Image = require('./Images');
const User = require('./Users');
const UserImage = sequelize.define('user_images', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: DataTypes.INTEGER,
    image_id: DataTypes.INTEGER, 
});
UserImage.belongsTo(Image, {foreignKey: 'image_id', as: 'image'});
Image.hasOne(UserImage, {foreignKey: 'image_id', as: 'user_images'});
module.exports = UserImage;