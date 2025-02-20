import express from "express";
import Course from "../models/Course.js";

const router = express.Router();

// GET all courses
router.get("/", async (req, res) => {
  try {
    const courses = await Course.findAll();
    res.render("courses/index", {
      title: "Courses List",
      courses,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// Add more course routes here

export default router;
