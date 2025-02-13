const express = require("express");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./db/connectDB.js");
const cors = require("cors");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173","http://localhost:5174",process.env.FRONT_END_DOMAIN], // Replace with your frontend URL(s)
    credentials: true, // Allow credentials
  })
);

// Routes
app.use("/api", userRoutes);

// Start Server
app.listen(PORT, () => {
  connectDB()
  console.log(`Server is running on http://localhost:${PORT}`);
});