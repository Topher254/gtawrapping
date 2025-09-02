const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'gta_wrapping'
};

// Create a connection pool
let pool;
try {
  pool = mysql.createPool(dbConfig);
  console.log('Connected to MySQL database');
} catch (error) {
  console.error('Database connection failed:', error.message);
  process.exit(1);
}

// Submit quote endpoint
app.post('/api/submit-quote', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, serviceType, projectDetails } = req.body;

    // Basic validation
    if (!firstName || !lastName || !email || !serviceType) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please fill in all required fields' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide a valid email address' 
      });
    }

    // Insert into database
    const connection = await pool.getConnection();
    const [result] = await connection.execute(
      'INSERT INTO quotes (first_name, last_name, email, phone, service_type, project_details) VALUES (?, ?, ?, ?, ?, ?)',
      [firstName, lastName, email, phone, serviceType, projectDetails]
    );
    connection.release();

    res.status(201).json({
      success: true,
      message: 'Quote request submitted successfully! We will contact you shortly.',
      quoteId: result.insertId
    });
  } catch (error) {
    console.error('Error submitting quote:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while submitting your quote. Please try again later.'
    });
  }
});

// Get all quotes (for admin purposes)
app.get('/api/quotes', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.execute('SELECT * FROM quotes ORDER BY created_at DESC');
    connection.release();
    
    res.json({
      success: true,
      quotes: rows
    });
  } catch (error) {
    console.error('Error fetching quotes:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch quotes'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});