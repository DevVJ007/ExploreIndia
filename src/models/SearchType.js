const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('./connection');
const SearchTag = require('./SearchTag');
const SearchType = sequelize.define('search_types', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
});
SearchType.hasMany(SearchTag, {foreignKey: 'type_id', as: 'tags'});
SearchTag.belongsTo(SearchType, {foreignKey: 'type_id', as: 'type'});
module.exports = SearchType;