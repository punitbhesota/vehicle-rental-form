import express from 'express'
import {getVehicleTypes,getVehiclesTypesByType,getVehiclesByVehicleTypeId} from '../controllers/vehicles.js';

const router = express.Router();

// Get Vehicle Types (i.e. car ,bike etc)
router.get('/types', getVehicleTypes);

// Get Vehicle types
router.get('/vehicle-types', getVehiclesTypesByType);

// Get Vehicles by typeid
router.get('/:typeId', getVehiclesByVehicleTypeId);

export default router;
