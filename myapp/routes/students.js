import express from 'express';
const router = express.Router();

// GET all students
router.get('/', (req, res) => {
    res.render('students/index', { 
        title: 'Students List',
        students: [] // You'll populate this with actual data later
    });
});

// Add more student routes here

export default router; 