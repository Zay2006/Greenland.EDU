// app.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const path = require('path');

// Load environment variables
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Database connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log('MongoDB Connected');
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};
connectDB();

// Mongoose Models
const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
    createdAt: { type: Date, default: Date.now },
});
const Student = mongoose.model('Student', studentSchema);

const courseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
    createdAt: { type: Date, default: Date.now },
});
const Course = mongoose.model('Course', courseSchema);

// Controllers
const studentController = {
    getAllStudents: async (req, res) => {
        try {
            const students = await Student.find().populate('courses');
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

const courseController = {
    getAllCourses: async (req, res) => {
        try {
            const courses = await Course.find().populate('students');
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

// Routes
app.get('/students', studentController.getAllStudents);
app.post('/students', studentController.createStudent);

app.get('/courses', courseController.getAllCourses);
app.post('/courses', courseController.createCourse);

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({
        message: err.message || 'Internal Server Error',
    });
});

// Serve HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
