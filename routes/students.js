import express from "express";
import Student from "../models/Student.js"; // Ensure the correct path to your Student model

const router = express.Router();

// GET all students
router.get("/students", async (req, res) => {
  console.log("student route");
  try {
    const students = await Student.findAll(); // Fetch students from the database
    res.render("students/students", { title: "Students", students });
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
