import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  "Greenfield.edu", // Update the database name here
  process.env.DB_USERNAME || "root",
  process.env.DB_PASSWORD || "0tNyIZGhtpb9i1x",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export { sequelize, connectDB };
