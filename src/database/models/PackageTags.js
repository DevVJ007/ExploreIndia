const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require("../../config/db.config");
const PackageTag = sequelize.define('package_tags', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    package_id: DataTypes.INTEGER,
    tag_id: DataTypes.INTEGER
});
module.exports = PackageTag;