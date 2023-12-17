const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require("../../config/db.config");
const Tag = require('./Tags');
const TagType = sequelize.define('tag_types', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type: DataTypes.STRING,
},{
    timestamps: true,
    allowNull: true,
});

TagType.hasMany(Tag, {foreignKey: 'type_id', as: 'tags'});
Tag.belongsTo(TagType, {foreignKey: 'type_id', as: 'type'});
module.exports = TagType;
