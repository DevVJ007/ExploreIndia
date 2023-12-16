const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('./connection');
const PackageTags = require('./PackageTags');
const Tag = sequelize.define('tags', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tag: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
});
Tag.belongsToMany(PackageTags , {foreignKey: 'tag_id', as: 'package_tags'});
PackageTags.belongsTo(Tag, {foreignKey: 'tag_id', as: 'tag'});
module.exports = Tag;