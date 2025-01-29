import mongoose from "mongoose";
require("dotenv").config();
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/GREENLAND.EDU");
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
