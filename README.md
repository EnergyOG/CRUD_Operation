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

## RUN IN POSTMAN
Click the button below to try the API in Postman:

[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://app.getpostman.com/run-collection/39196290-8f96c3d1-f1b2-4413-809c-b5b18fe512f7?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D39196290-8f96c3d1-f1b2-4413-809c-b5b18fe512f7%26entityType%3Dcollection%26workspaceId%3D4ed75314-1bc2-4008-b4d3-f75df54cea66#?env%5Bcrud_operation%5D=W3sia2V5IjoiYmFzZV91cmwiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0Iiwic2Vzc2lvblZhbHVlIjoiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaSIsImNvbXBsZXRlU2Vzc2lvblZhbHVlIjoiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaSIsInNlc3Npb25JbmRleCI6MH1d)

## DEPLOYMENT ON RENDER
[https://crud-operation-3q8o.onrender.com]