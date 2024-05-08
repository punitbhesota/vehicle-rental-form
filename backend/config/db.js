import { Sequelize } from "sequelize";

const sequelize = new Sequelize(process.env.DB_CONN_URI);

export default sequelize;