const Course = require("../models/Course");

const courseController = {
  getAllCourses: async (req, res) => {
    try {
      const courses = await Course.find().populate("students");
      res.status(200).json(courses);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  createCourse: async (req, res) => {
    try {
      const course = new Course(req.body);
      await course.save();
      res.status(201).json(course);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = courseController;