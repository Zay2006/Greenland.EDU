import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import connectDB from './myapp/config/db.js';
import config from './myapp/config/config.js';

// Routes
import studentRoutes from './myapp/routes/students.js';
import courseRoutes from './myapp/routes/courses.js';

// ES6 module __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);

// Default route for dashboard
app.get('/', (req, res) => {
    res.render('dashboard', { title: 'Dashboard' });
});

// Connect to MongoDB
connectDB();

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('error', { 
        title: 'Error',
        message: 'Something went wrong!' 
    });
});

// Start the server
app.listen(config.port, () => {
    console.log(`Server is running on http://localhost:${config.port}`);
});