import { DataTypes } from 'sequelize'
import { sequelize } from '../config/db.js';

const VehicleType = sequelize.define('VehicleTypes', {
name: {
    type: DataTypes.STRING,
    allowNull: false
},
type: {
    type: DataTypes.STRING
}
},
{
tableName: 'VehicleTypes',
});

const Vehicle = sequelize.define('Vehicles', {
type_id: {
    type: DataTypes.INTEGER,
    allowNull: false
},
model: {
    type: DataTypes.STRING,
    allowNull: false
}
},
{
tableName: 'Vehicles',
});

export {VehicleType,Vehicle}