const jwt = require("jsonwebtoken");

const generateUserToken = (res, _id) => {
    const token = jwt.sign({ _id }, process.env.USER_JWT_TOKEN, { expiresIn: "3d" });

    res.cookie("user_token", token, {
        httpOnly: true,  // Prevents JavaScript from accessing the cookie
        sameSite: "None", // Required for cross-site cookies
        secure: true, 
        path: "/",
        maxAge: 3 * 24 * 60 * 60 * 1000 
    });

    return token;
};

module.exports = generateUserToken;