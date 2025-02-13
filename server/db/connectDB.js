const mongoose = require("mongoose");
require("dotenv").config();
// MongoDB connection URI
const MONGO_URI = process.env.MONGO_URL
// Function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;