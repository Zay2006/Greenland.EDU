import express from "express";
import Course from "../models/Course.js"; // Ensure the correct path to your Course model

const router = express.Router();

// GET all courses
router.get("/courses", async (req, res) => {

  console.log('COURSE ROUTES');

  try {
    
    const courses = await Course.findAll(); // Use findAll to get all courses

    res.render("courses/courses", { title: "Courses", courses }); // Render the view and pass 
    
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).send("Server Error");
  }
});

export default router;
