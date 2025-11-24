import express from "express";
import createUser from "../controller/create.controller.js";
import { validateUser } from "../middleware/yup.middleware.js";

const router = express.Router();

router.post("/create", validateUser, createUser.registerUser);
router.post("/create/newUser", validateUser, createUser.newUser);

export default router;