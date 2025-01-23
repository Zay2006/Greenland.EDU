const express = require('express');
const app = express();
const connectDB = require('./myapp/config/db');
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Set view engine
app.set('view engine', 'ejs');

// Routes
const studentRoutes = require('./myapp/routes/students');
const courseRoutes = require('./myapp/routes/courses');

app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);

// Default route for dashboard
app.get('/', (req, res) => {
  res.render('dashboard', { title: 'Dashboard' });
});

// Connect to MongoDB
connectDB();

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});