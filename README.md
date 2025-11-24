# Node.js CRUD Operation API

This project is a **backend REST API**  built using **Node.js**, **Express.js**, and **MongoDB** that performs full **CRUD operations** (Create, Read, Update, Delete) on user data. It supports updating and deleting by both **ID** and **email**, with clean controller-based architecture and modular routing.

## **CRUD Endpoints Overview**

### 🖊️ Create
The Create route in the REST API allows the creation of new users by providing details such as username, email, and password.


### 📚 Read
The Read route enables fetching user information or logging in users using their personal credentials, like email and password.

### 📑 Update
The Update route is used to modify existing user information, either by email or user ID, allowing updates to their stored details.

### 🚫 Delete
The Delete route allows removing users from the database. You can delete individual users based on their email or ID, or remove all users at once.---


## 🔧 Features

| Feature | Description |
|--------|-------------|
| Create | Add a new user to the database |
| Read | Fetch all users or a single user |
| Update | Update user information using `ID` or `email` |
| Delete | Delete a user using `ID` or `email` |
| Delete All | Admin route to remove all users from database |
| CORS | Allows requests from the frontend or Postman |
| Helmet | Extra security to the backend server |
| Environment Variables | Uses `.env` file for configuration |
| Docker | Bundling or containerizing |
| Swagger | Auto-generates API documenting for all endpoints |
| Test | Test scripts to validate API functionality using JEST |
| Git and GitHub | Version control and remote backup of the backend project |
| Deployment | Render deployment provider to publish the backend service |

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- Nodemon (development)
- dotenv
- CORS
- Helmet