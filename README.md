# **User Management System**

This is a **backend application** built with **Express.js** and **MongoDB** for managing user information. It allows users to register, log in, and search for other users by username or email. The application uses **JWT (JSON Web Tokens)** for authentication.

---

## **Features**

- **User Registration**: Users can register by providing their username, password, full name, gender, date of birth, and country.
- **User Login**: Registered users can log in and receive a JWT token for authentication.
- **Search User**: Authenticated users can search for other users by username or email and retrieve their full information.
- **Data Validation**: Server-side validation ensures that all required fields are provided and in the correct format.
- **JWT Authentication**: Protected routes ensure that only authenticated users can access certain endpoints.

---

## **Tech Stack**

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Tools**: Postman (for API testing)

---

## **Setup Instructions**

Follow these steps to set up and run the project locally.

### **Prerequisites**

1. **Node.js**: Make sure Node.js is installed on your machine. You can download it from [here](https://nodejs.org/).
2. **MongoDB**: Install MongoDB locally or use a cloud service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
3. **Postman**: Install Postman for testing the APIs. Download it from [here](https://www.postman.com/downloads/).

---

### **Steps to Run the Project**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Balaji091/UserManagementSystem.git
   cd UserManagementSystem
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     PORT=5000
     MONGODB_URI=mongodb://localhost:27017/userDB
     JWT_SECRET=your_jwt_secret_key
     ```
   - Replace `your_jwt_secret_key` with a strong secret key for JWT.

4. **Start the Server**:
   ```bash
   npm start
   ```
   The server will start running at `http://localhost:5000`.

5. **Test the APIs**:
   - Use **Postman** to test the APIs. Import the Postman collection provided in the repository.
   - Refer to the Postman documentation for detailed API descriptions and examples.

---

## **Project Structure**

```
backend/
  ├── controllers/       # Contains logic for handling API requests
  ├── models/            # Contains MongoDB schemas and models
  ├── routes/            # Defines API routes
  ├── middlewares/       # Contains middleware functions (e.g., JWT verification)
  ├── utils/             # Utility functions (e.g., token generation)
  ├── server.js          # Entry point for the application
  └── .env               # Environment variables
```

---

## **Postman Collection**

The APIs are documented in a **Postman Collection**. You can import the collection to test the APIs. The collection includes:</br>
<a href="https://galactic-flare-551414.postman.co/workspace/New-Team-Workspace~f0942aaf-c88c-4753-9904-8fc4e772edfa/collection/40381633-dd0c76c0-ab98-4d28-a208-8754f10b0676?action=share&creator=40381633">Postman Doucmenation Link </a>

- **Auth**:
  - Sign Up
  - Sign In
  - Sign Out
- **Home**:
  - Search User by Username
  - Get User Details by ID
  - Get All Users

---

## **Contributing**

If you'd like to contribute to this project, feel free to open an issue or submit a pull request.

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

