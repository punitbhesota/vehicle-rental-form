import { Sequelize } from "sequelize";

const sequelize = new Sequelize(process.env.DB_CONN_URI);

export default async function initDb() {
  try {
    await sequelize.authenticate();
    console.log('Database: connection established successfully');   
  } 
  catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }
}