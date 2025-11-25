import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  console.log("Welcome to the CRUD Operation API");
  return res.status(200).send({
    message: "Welcome to the CRUD Operation API",
    status: "Online",
  });
});

export default router;
