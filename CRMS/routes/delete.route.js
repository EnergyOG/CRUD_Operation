import express from "express";
import deleteUser from "../controller/delete.controller.js";

const router = express.Router();

router.delete("/delete/id/:id", deleteUser.handleDeleteById);
router.delete("/delete/email/:email", deleteUser.handleDeleteByEmail);
router.delete("/deleteAll", deleteUser.handleDeleteAll);

export default router;