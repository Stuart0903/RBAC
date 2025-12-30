const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/dbconnect');
const authRoutes = require('./routes/authRoutes');

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//connect to database
connectDB();

//Routes
app.use('/api/auth', authRoutes);


//Start the server
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
 