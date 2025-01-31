const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const studentController = require("../controllers/studentController");

router.get("/", studentController.getAllStudents);
router.post("/", studentController.createStudent);

router.get('/', (req, res) => {
    res.render('dashboard', { title: 'Dashboard' });
  });

  
module.exports = router;
