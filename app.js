import express from "express";
import studentsRouter from "./routes/students.js"; // Ensure the correct path to your students router

const app = express();

// ...existing code...

app.use("/", studentsRouter); // Register the students route

// ...existing code...

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
