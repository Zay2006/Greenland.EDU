import express from 'express';
const router = express.Router();

// GET all courses
router.get('/', (req, res) => {
    res.render('courses/index', { 
        title: 'Courses List',
        courses: [] // You'll populate this with actual data later
    });
});

// Add more course routes here

export default router; 