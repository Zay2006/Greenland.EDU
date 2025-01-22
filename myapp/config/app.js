const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const path = require("path");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");

// Load environment variables
dotenv.config();

// Initialize app
const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// Connect to database
connectDB();

// Import routes
const studentRoutes = require("./routes/students");
const courseRoutes = require("./routes/courses");

// Use routes
app.use("/students", studentRoutes);
app.use("/courses", courseRoutes);

// Error handling middleware
app.use(errorHandler);

// Serve HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
