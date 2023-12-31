const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require("../../config/db.config");
const PackageImage = sequelize.define('package_images', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    package_id: DataTypes.INTEGER,
    image_id: DataTypes.INTEGER
});
module.exports = PackageImage;