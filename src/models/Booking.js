const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../../config/db.config');
const Booking = sequelize.define('bookings', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: DataTypes.INTEGER,
    package_id: DataTypes.INTEGER,
    booking_date: DataTypes.DATE,
    payment_status: DataTypes.STRING
});
module.exports = Booking;