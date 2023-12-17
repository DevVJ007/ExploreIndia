const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('./connection');
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