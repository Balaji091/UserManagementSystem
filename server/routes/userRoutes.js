const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const {verifyUserToken} = require("../middlewares/user.token.verification");

// Sign Up
router.post("/signup", userController.signUp);

// Sign In
router.post("/signin", userController.signIn);

// Logout
router.post("/logout", userController.logout);

// Get User by ID
router.get("/user/:user_id", userController.getUserById);

// Get All Users
router.get("/users", userController.getAllUsers);

// Search User by Username
router.get("/search", userController.searchUser);


router.get("/check-auth", verifyUserToken,(req,res)=>(
    res.status(200).json({message : "Authenticated"}
    )));

module.exports = router;