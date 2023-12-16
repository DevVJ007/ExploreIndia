const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('./connection');
const Users = require('./Users');
const Role = sequelize.define('roles', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    role: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
});
Role.hasMany(Users, {foreignKey: 'role_id', as: 'users'});
Users.belongsTo(Role, {foreignKey: 'role_id', as: 'role'});
module.exports = Role;
