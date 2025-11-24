import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenvFlow from "dotenv-flow";
import mongoose from "mongoose";

import createUser from "./CRMS/routes/create.route.js";
import getUser from "./CRMS/routes/get.route.js";
import updateUser from "./CRMS/routes/update.route.js";
import deleteUser from "./CRMS/routes/delete.route.js";

dotenvFlow.config();

const app = express();
export default app;

app.use(express.json());
app.use(helmet());
app.use(cors());

app.use("/api", createUser, getUser, updateUser, deleteUser);

app.use((req, res) => {
  res.status(404).json({ message: "Server Not FOUND!!" });
});

if (process.env.NODE_ENV === "test") {
  console.log("Running in test mode, skipping server startup.");
}

const port = process.env.NODE_ENV === "production" ? process.env.PROD_PORT : process.env.DEV_PORT || 5000;
const mongoURI = process.env.MONGODB_URI;

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log(`Successfully connected to database on ${mongoURI}`);
    app.listen(port, () =>
      console.log(`Listening on port http://localhost:${port}`)
    );
  })
  .catch((error) => console.log("Database connection failed", error));
