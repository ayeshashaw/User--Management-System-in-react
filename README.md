# User-Management-System-in-react

A simple and intuitive User Management System built with React, Axios, and Firebase to perform CRUD (Create, Read, Update, Delete) operations. Users can be added, edited, fetched, and deleted seamlessly.

# Features
Add Users: Enter name and email to add a user.
View Users: Fetch and display all users in the database.
Edit Users: Update the details of an existing user.
Delete Users: Remove a user from the system.
Firebase Integration: Realtime database for storing user data.
Axios Integration: Simplified HTTP requests for interacting with the Firebase API.

# Tech Stack
Frontend: React (useState, useEffect)
Backend: Firebase Realtime Database
HTTP Requests: Axios


# Prerequisites
Ensure you have the following installed on your system:

Node.js: Download here
npm: Comes with Node.js
A Firebase Realtime Database URL for storing user data.




# Usage
Navigate to the application in your browser at http://localhost:3000.
Use the input fields to add a user's name and email.
Fetch the user list using the "Fetch Users" button.
Edit or delete users using the respective buttons.

# Axios Integration
This project uses Axios to interact with Firebase's Realtime Database. Below are the main HTTP requests implemented:

# Installation
To install Axios, run:
npm install axios
Usage

Fetch Users:

const response = await axios.get("https://your-firebase-url/users.json");
Add User:


const newUser = { name, email };
await axios.post("https://your-firebase-url/users.json", newUser);
Delete User:
await axios.delete(`https://your-firebase-url/users/${id}.json`);
Update User:


const updatedUser = { name, email };
await axios.patch(`https://your-firebase-url/users/${id}.json`, updatedUser);

# Why Axios?
Axios simplifies HTTP requests with:

Promise-based syntax for cleaner code.
Built-in support for JSON responses.
Easy error handling.

# File Structure
plaintext

src/
├── App.css            # Styling for the application
├── App.js             # Main component containing the logic
├── index.js           # Entry point of the React app
├── .env               # Environment file for Firebase URL

# API Endpoints
This project interacts with Firebase Realtime Database using the following endpoints:

GET Users:
GET https://<FIREBASE_DATABASE_URL>/users.json
POST User:
POST https://<FIREBASE_DATABASE_URL>/users.json
DELETE User:
DELETE https://<FIREBASE_DATABASE_URL>/users/<USER_ID>.json
PATCH User:
PATCH https://<FIREBASE_DATABASE_URL>/users/<USER_ID>.json

# Future Enhancements
Add user authentication (login/signup).
Implement user search functionality.
Improve the UI/UX with a design framework like Material-UI.
Add pagination for large datasets.
