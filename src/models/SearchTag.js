const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('./connection');
const SearchTag = sequelize.define('search_tags', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tag_name: DataTypes.STRING,
    type_id: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
});
module.exports = SearchTag;
