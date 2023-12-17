const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('./connection');
const PackageImage = require('./PackageImage');
const Image = sequelize.define('images', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    path: DataTypes.STRING,
});
Image.hasOne(PackageImage, {foreignKey: 'image_id', as: 'package_images'});
PackageImage.belongsTo(Image, {foreignKey: 'image_id', as: 'image'});
module.exports = Image;