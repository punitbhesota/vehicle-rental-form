import {VehicleType, Vehicle} from '../models/vehicles.js'

// Function to fetch all available vehicletype types (car, bike)
export async function getVehicleTypes(req, res){
  try {
    const types = ['car', 'bike'];
    res.status(200).json(types);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching vehicle types' });
  }
};

// Function to fetch vehicles types based on user-provided type (car or bike)
export async function getVehiclesTypesByType(req, res) {
  const type = req.query.type;

  try {
    if (!type || !['car', 'bike'].includes(type.toLowerCase())) {
      return res.status(400).json({ message: 'Invalid vehicle type' });
    }

    const vehicletypes = await VehicleType.findAll({
      where: { type },
    });

    if (!vehicletypes.length) {
      return res.status(404).json({ message: 'No vehicles found for this type' });
    }

    res.status(200).json(vehicletypes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching vehicles' });
  }
};

// Function to fetch vehicles based on vehicle type ID
export async function getVehiclesByVehicleTypeId(req, res) {
  const typeId = req.params.typeId;

  try {
    const vehicleType = await VehicleType.findOne({
      where: { id: typeId },
    });

    if (!vehicleType) {
      return res.status(404).json({ message: 'Invalid vehicle type ID' });
    }

    const vehicles = await Vehicle.findAll({
      where: { type_id: typeId },
    });

    if (!vehicles.length) {
      return res.status(404).json({ message: 'No vehicles found for this type' });
    }

    res.status(200).json(vehicles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching vehicles' });
  }
};
