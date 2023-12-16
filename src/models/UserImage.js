const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('./connection');
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
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
});
UserImage.belongsTo(Image, {foreignKey: 'image_id', as: 'image'});
Image.hasOne(UserImage, {foreignKey: 'image_id', as: 'user_images'});
module.exports = UserImage;