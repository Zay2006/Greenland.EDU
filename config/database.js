import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const connectDB = () => {
  const connection = mysql.createConnection(process.env.MYSQL_URI);

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
