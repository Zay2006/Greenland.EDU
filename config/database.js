import Sequelize  from "sequelize";
import "dotenv/config"; 

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
    console.log("Connection has been established successfully.");

    await sequelize.sync();
    console.log("Database synchronized.");
  } 
  catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

connectDB();

export default sequelize;
