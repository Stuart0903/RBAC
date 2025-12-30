const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const connectDB = async () => {
    try{
        const connect = await mongoose.connect(process.env.mongoose_url);
        console.log(`MongoDB connected: ${connect.connection.host}`);

    }catch(err){
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;