import 'dotenv/config';
import express from 'express';
import cors from 'cors'
import initDb from './config/db.js'
import vehicleRoutes from './routes/vehicles.js'
import bookingRoutes from './routes/bookings.js'


const app = express();
const PORT = process.env.PORT || 7002;

app.use(express.json());
app.use(cors());

app.use('/vehicles',vehicleRoutes)
app.use('/book',bookingRoutes)


async function init(){
  try {
      await initDb();

      // Start the server
      app.listen(PORT, () => {
        console.log(`Service running on port ${PORT || 7002}`);
      });
  } catch (err) {
      logger.error('Failed to start the service');
      console.error(err);
      process.exit(1);
  }
}

init();