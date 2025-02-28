import Sequelize  from "sequelize";
import "dotenv/config"; 

console.log("DB_NAME", process.env.DB_NAME);
console.log("DB_PASSWORD", process.env.DB_PASSWORD);
console.log("DB_USERNAME", process.env.DB_USERNAME);

const sequelize = new Sequelize(

  process.env.DB_NAME, // Update the database name here
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

connectDB();

export default sequelize;
