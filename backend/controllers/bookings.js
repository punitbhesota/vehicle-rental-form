import Booking from '../models/bookings.js';
import { Sequelize } from 'sequelize';

// Function to check for overlapping bookings for a vehicle
const checkDateOverlap = async (vehicleId, startDate, endDate) => {
  const overlappingBooking = await Booking.findOne({
    where: {
      vehicleId,
      [Sequelize.Op.or]: [
        {
          [Sequelize.Op.and]: [
            { startDate: { [Sequelize.Op.lte]: endDate } }, // Overlap on start date
            { endDate: { [Sequelize.Op.gte]: startDate } },
          ],
        },
        {
          [Sequelize.Op.and]: [
            { startDate: { [Sequelize.Op.lte]: new Date(endDate) } }, // Overlap on end date
            { endDate: { [Sequelize.Op.gte]: new Date(startDate) } },
          ],
        },
      ],
    },
  });

  return overlappingBooking; // Return the overlapping booking if found, otherwise null
};

export async function createBooking(req, res) {
  const { firstName, lastName, vehicleId, startDate, endDate } = req.body;

  // Basic validation
  if (!firstName || !lastName || !vehicleId || !startDate || !endDate) {
    return res.status(400).json({ message: 'Missing required booking details' });
  }
  
  // Date validation (ensure end date is after start date)
  if (new Date(startDate) >= new Date(endDate)) {
    return res.status(400).json({ message: 'End date must be after start date' });
  }

  try {
    const overlappingBooking = await checkDateOverlap(vehicleId, startDate, endDate);

    if (overlappingBooking) {
      return res.status(409).json({ message: 'Vehicle already booked for these dates' });
    }

    // Create a new booking
    const newBooking = await Booking.create({
      userName: `${firstName} ${lastName}`,
      vehicleId,
      startDate,
      endDate,
    });

    console.log("Booking Made",newBooking)

    res.status(201).json({message:"Vehicle Rented Successfully"});

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating booking' });
  }
};
