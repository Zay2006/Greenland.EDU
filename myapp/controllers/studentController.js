const Student = require("../models/Student");

const studentController = {
  getAllStudents: async (req, res) => {
    try {
      const students = await Student.find().populate("courses");
      res.status(200).json(students);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  createStudent: async (req, res) => {
    try {
      const student = new Student(req.body);
      await student.save();
      res.status(201).json(student);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = studentController;
