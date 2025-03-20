const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL, { dbName: process.env.MONGO_DB_NAME, } );
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error conecting to MongoDB:", error);
        process.exit(1);
    }
}

module.exports = connectDB;
