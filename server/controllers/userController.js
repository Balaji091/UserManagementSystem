const User = require("../models/User");
const bcrypt = require("bcrypt");
const generateUserToken = require("../utils/userToken.util.js")

// Sign Up
const signUp = async (req, res) => {
  try {
    const { username, password, fullName, gender, dateOfBirth, country } = req.body;

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      password: hashedPassword,
      fullName,
      gender,
      dateOfBirth,
      country,
    });

    await newUser.save();
    generateUserToken(res,newUser._id)

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error: error.message });
  }
};

// Sign In
const signIn = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    
    generateUserToken(res,user._id)

    res.status(200).json({ message: "Sign in successful" });
  } catch (error) {
    res.status(500).json({ message: "Error signing in", error: error.message });
  }
};

// Logout (No action needed for JWT-less logout)

const logout = (req, res) => {
  res.cookie('user_token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    expires: new Date(0), // Set the cookie to expire immediately
});

res.status(200).json({
    success: true,
    message: "Logged out successfully",
});
};

// Get User Details by ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.user_id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Error fetching user", error: error.message });
  }
};

// Get All Users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error: error.message });
  }
};

// Search User by Username
const searchUser = async (req, res) => {
  try {
    const { username } = req.query;
    const user = await User.findOne({ username }).select("_id");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Error searching user", error: error.message });
  }
};


module.exports = { signUp, signIn, logout, getUserById, getAllUsers, searchUser };