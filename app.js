import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import connectDB from "./config/database.js";
import courseRoutes from "./routes/courses.js";
import errorHandler from "./middleware/errorHandler.js";

dotenv.config();

const app = express();
app.use(bodyParser.json());

// Get __dirname equivalent in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

// Connect to MongoDB
connectDB();

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
