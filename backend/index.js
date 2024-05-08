import 'dotenv/config';
import express from 'express';
import cors from 'cors'
import initDb from './config/db.js'

const app = express();
const PORT = process.env.PORT || 7002;

app.use(express.json());
app.use(cors());

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