import bcrypt from "bcrypt";
import dotenvFlow from "dotenv-flow";
import jwt from "jsonwebtoken";
import userModel from "../model/userModel.js";

dotenvFlow.config();

const secretKey = process.env.JWT_SECRET_KEY;

class createController {
  async registerUser(req, res) {
    try {
      const { username, email, password } = req.body;

      if(!username || !email || !password){
        return res.status(400).json({message: "All fields are required"});
      }

      const existingUser = await userModel.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new userModel({
        username,
        email,
        password: hashedPassword,
      });
      await userModel.create(newUser);

      const token = jwt.sign(
        {
          id: newUser._id,
          username: newUser.username,
          email: newUser.email,
        },
        secretKey,
        { expiresIn: "1h" }
      );

      return res.status(201).json({
        message: "User created successfully",
        token,
        user: {
          id: newUser._id,
          username: newUser.username,
          email: newUser.email,
        },
      });
    } catch (err) {
      console.error("Registration error:", err);
      res.status(500).json({
        message: "Error creating user",
        error: err.message,
      });
    }
  }

  async newUser(req, res){
    try{
       const {username, email, password} = req.body;
       const user = new userModel({
        username,
        email,
        password
       });
       await userModel.create(user);
       res.status(201).json({
        message: "New user created successfully",
        data: user
       });
    }
    catch(err){
      res.status(500).json({
        message: "Error creating new user",
        error: err.message
      });
    }
  }
}
const createUser = new createController();
export default createUser;
