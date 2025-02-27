import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js"; // Correct import
import bodyParser from "body-parser";
import { dirname } from "path";
import errorHandler from "./middleware/errorHandler.js";
import cors from "cors";

// Routes
import studentRoutes from "./routes/students.js";
import courseRoutes from "./routes/courses.js"; // Ensure the correct path to your course routes
import majorMinorRoutes from "./routes/majorsMinors.js";

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
app.use("/majors-minors", majorMinorRoutes);

// Default route for dashboard
app.get("/", (req, res) => {
  res.render("dashboard", { title: "Dashboard" });
});

app.get("/login/student", (req, res) => {
  res.render("login", { userType: "student" });
});

app.get("/login/teacher", (req, res) => {
  res.render("login", { userType: "teacher" });
});

app.post("/login", async (req, res) => {
  const { username, password, userType } = req.body;
  // Add authentication logic here
  if (userType === "student" && username === "student") {
    res.render("student", { username });
  } else if (userType === "teacher" && username === "teacher") {
    // Fetch students data for teacher view
    const students = await Student.findAll({ include: [Major, Minor] });
    res.render("teacher", { username, students });
  } else if (userType === "admin" && username === "admin") {
    // Fetch teachers data for admin view
    const teachers = await Teacher.findAll();
    res.render("admin", { username, teachers });
  } else {
    res.redirect("/login");
  }
});

// Error handling middleware
app.use(errorHandler);

// Start the server
const startServer = async () => {
  await connectDB();

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
  });
};

startServer();
