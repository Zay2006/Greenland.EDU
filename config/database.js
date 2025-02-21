import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const connectDB = () => {
  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  connection.connect((err) => {
    if (err) {
      console.error(`Error: ${err.message}`);
      process.exit(1);
    } else {
      console.log("MySQL Connected");
    }
  });

  return connection;
};

export default connectDB;
