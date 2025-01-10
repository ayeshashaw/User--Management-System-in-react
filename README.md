**User Management System**

This is a simple and intuitive User Management System built with React, Axios, and Firebase, enabling CRUD (Create, Read, Update, Delete) operations. Users can be added, edited, retrieved, and deleted seamlessly.

### Features
- **Add Users:** Enter the user’s name and email to add a new user.
- **View Users:** Fetch and display all users stored in the database.
- **Edit Users:** Update the details of existing users.
- **Delete Users:** Remove a user from the system.
- **Firebase Integration:** Utilizes a real-time database for storing user data.
- **Axios Integration:** Simplifies HTTP requests for interacting with the Firebase API.

### Demo
*(Replace this with a gif or image of your application in action)*

### Tech Stack
- **Frontend:** React (utilizing hooks like useState and useEffect)
- **Backend:** Firebase Realtime Database
- **HTTP Requests:** Axios

### Prerequisites
Ensure you have the following installed on your system:
- **Node.js:** [Download here](https://nodejs.org)
- **npm:** Comes pre-installed with Node.js
- A Firebase Realtime Database URL for storing user data.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/user-management-system.git
   cd user-management-system
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following content:
   ```
   REACT_APP_FIREBASE_URL=https://your-firebase-database-url
   ```

4. Start the development server:
   ```bash
   npm start
   ```

### Usage
- Navigate to the application in your browser at **http://localhost:3000**.
- Use the input fields to add the user's name and email.
- Fetch the user list by clicking the "Fetch Users" button.
- Edit or delete users using the respective buttons.

### Axios Integration
This project uses Axios to interact with Firebase's Realtime Database. Below are the main HTTP requests implemented:

#### Installation
To install Axios, run:
```bash
npm install axios
```

#### Example Requests
- **Fetch Users:**
  ```javascript
  const response = await axios.get("https://your-firebase-url/users.json");
  ```

- **Add User:**
  ```javascript
  const newUser = { name, email };
  await axios.post("https://your-firebase-url/users.json", newUser);
  ```

- **Delete User:**
  ```javascript
  await axios.delete(`https://your-firebase-url/users/${id}.json`);
  ```

- **Update User:**
  ```javascript
  const updatedUser = { name, email };
  await axios.patch(`https://your-firebase-url/users/${id}.json`, updatedUser);
  ```

### Why Use Axios?
Axios simplifies HTTP requests with the following benefits:
- **Promise-based syntax** for cleaner code.
- **Built-in support for JSON responses.**
- **Easy error handling.**

### File Structure
```
src/
├── App.css             # Styling for the application
├── App.js              # Main component containing the logic
├── index.js            # Entry point of the React app
├── .env                # Environment file for Firebase URL
```

### API Endpoints
This project interacts with the Firebase Realtime Database using the following endpoints:
- **GET Users:** `GET https://<FIREBASE_DATABASE_URL>/users.json`
- **POST User:** `POST https://<FIREBASE_DATABASE_URL>/users.json`
- **DELETE User:** `DELETE https://<FIREBASE_DATABASE_URL>/users/<USER_ID>.json`
- **PATCH User:** `PATCH https://<FIREBASE_DATABASE_URL>/users/<USER_ID>.json`

### Future Enhancements
- Implement user authentication (login/signup).
- Add user search functionality.
- Enhance UI/UX using a design framework such as Material-UI.
- Introduce pagination for handling large datasets.
