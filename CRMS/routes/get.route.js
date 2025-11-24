import express from "express";
import getUser from "../controller/get.controller.js";

const router = express.Router();

router.post("/login", getUser.loginUser);
router.get("/getUser/email/:email", getUser.getUserByEmail);
router.get("/getAll/users", getUser.getAllUsers);

export default router;