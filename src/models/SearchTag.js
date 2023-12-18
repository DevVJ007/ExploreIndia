const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require("../../config/db.config");
const SearchTag = sequelize.define('search_tags', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tag_name: DataTypes.STRING,
    type_id: DataTypes.STRING
});
module.exports = SearchTag;
