'use strict';
const { Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Booking extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Booking.init({
        object_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        package_id: {
             type: DataTypes.INTEGER
            },
        booking_date: { 
            type: DataTypes.DATE
        },
        payment_status: { 
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        modelName: 'Booking',
    });
    return Booking;
};