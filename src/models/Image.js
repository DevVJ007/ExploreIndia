const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('./connection');
const PackageImage = require('./PackageImage');
const Image = sequelize.define('images', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    image: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
});
Image.hasOne(PackageImage, {foreignKey: 'image_id', as: 'package_images'});
PackageImage.belongsTo(Image, {foreignKey: 'image_id', as: 'image'});
module.exports = Image;