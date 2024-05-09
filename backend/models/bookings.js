import { DataTypes } from 'sequelize'
import { sequelize } from '../config/db.js';
import { Vehicle } from './vehicles.js';

const Booking = sequelize.define('Bookings', {
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vehicleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Vehicles',
        key: 'id',
      },
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  });

  // Associations
Booking.belongsTo(Vehicle, { foreignKey: 'vehicleId' }); // Association with the Vehicle model

export default Booking;