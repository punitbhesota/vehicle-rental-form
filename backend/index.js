import 'dotenv/config';
import express from 'express';
import cors from 'cors'
import sequelize from './config/db.js';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

// Start the server
sequelize.authenticate().then(() => {
  console.log('Database: connection established successfully');
  app.listen(PORT, () => {
    console.log(`Service running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
