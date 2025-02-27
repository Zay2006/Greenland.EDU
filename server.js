import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { dirname } from "path";
import errorHandler from "./middleware/errorHandler.js";
import cors from "cors";

// Routes
import studentRoutes from "./routes/students.js";
import courseRoutes from "./routes/courses.js"; // Ensure the correct path to your course routes

// ES6 module __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use("/students", studentRoutes);
app.use("/courses", courseRoutes); // Use the course routes

// Default route for dashboard
app.get("/", (req, res) => {
  res.render("dashboard", { title: "Dashboard" });
});


// Error handling middleware
app.use(errorHandler);

// Start the server
const startServer = async () => {

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
  });
};

startServer();
