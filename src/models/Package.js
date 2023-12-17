const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require("../../config/db.config");
const PackageImage = require('./PackageImage');
const PackageTags = require('./PackageTags');
const Booking = require('./Booking');
const Review = require('./Review');
const Package = sequelize.define('packages', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    location: DataTypes.STRING,
    price: DataTypes.INTEGER,
    duration: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    days : DataTypes.INTEGER,
    nights : DataTypes.INTEGER,
    date: DataTypes.DATE,
    tour_type_id: DataTypes.STRING,
    activity_id: DataTypes.STRING,
});
Package.hasMany(PackageImage, {foreignKey: 'package_id', as: 'package_images'});
PackageImage.belongsTo(Package, {foreignKey: 'package_id', as: 'package'});
Package.hasMany(PackageTags, {foreignKey: 'package_id', as: 'package_tags'});
PackageTags.belongsTo(Package, {foreignKey: 'package_id', as: 'package'});
Package.hasMany(Booking, {foreignKey: 'package_id', as: 'bookings'});
Booking.belongsTo(Package, {foreignKey: 'package_id', as: 'package'});
Package.hasMany(Review, {foreignKey: 'package_id', as: 'reviews'});
Review.belongsTo(Package, {foreignKey: 'package_id', as: 'package'});
module.exports = Package;