const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('./connection');
const PackageImage = sequelize.define('package_images', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    package_id: DataTypes.INTEGER,
    image_id: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
});
module.exports = PackageImage;