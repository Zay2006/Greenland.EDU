import express from "express";
import Student from "../models/Students.js"; // Ensure the correct path to your Student model
import Course from "../models/Course.js"; // Ensure the correct path to your Course model
const router = express.Router();

// GET all students
router.get("/", async (req, res) => {

    console.log('students route');
  try {
    const students = await Student.findAll() // Fetch students from the database
    console.log(students);

    res.render("students", { title: "Students", students });
 
  } catch (error) {
 
    console.error("Error fetching students:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/courses", async (req, res) => {

  console.log('courses route');

  try {
    const courses = await Course.findAll(); // Use findAll to get all courses
    
    res.render("courses/courses", { title: "Courses", courses }); // Render the view and pass courses
    
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).send("Server Error");
  }
});

export default router;
