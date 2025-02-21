import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import path from "path";
import sequelize from "./config/database.js"; // Ensure this path is correct
import courseRoutes from "./routes/courses.js";
import errorHandler from "./middleware/errorHandler.js";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// Initialize Sequelize
sequelize
  .sync()
  .then(() => console.log("Database synced"))
  .catch((err) => console.error("Error syncing database:", err));

// Use routes
app.use("/courses", courseRoutes);

// Basic route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Use error handler middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
