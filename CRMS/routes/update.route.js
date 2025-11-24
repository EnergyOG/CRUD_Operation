import express from "express";
import updateUser from "../controller/update.controller.js";

const router = express.Router();

router.put("/update/id/:id", updateUser.updateById);
router.put("/update/email/:email", updateUser.updateByEmail);

export default router;