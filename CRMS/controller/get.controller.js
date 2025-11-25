import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import userModel from "../model/userModel.js";

dotenv.config();

const secretKey = process.env.JWT_SECRET_KEY;

class getController {
  async loginUser(req, res) {
  try {
    const { email, password } = req.body;

    const existingUser = await userModel.findOne({ email });
    
    if (!existingUser) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordValid) {
      return res.status(400).json({
        message: "Invalid Password",
      });
    }

    const token = jwt.sign(
      {
        id: existingUser._id,
        username: existingUser.username,
        email: existingUser.email,
      },
      secretKey,
      { expiresIn: "1h" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 60 * 60 * 1000,
    });

    return res.status(200).json({
      message: "Login successful",
      user: {
        id: existingUser._id,
        username: existingUser.username,
        email: existingUser.email,
      },
      token,
    });

  } catch (err) {
    console.log("Error", err);
    return res.status(500).json({
      message: "Internal Server Error",
      error: err.message,
    });
  }
}


  async getUserByEmail(req, res) {
    try {
      const { email } = req.params;
      const existingUser = await userModel.findOne({email});
      if (!existingUser) {
        return res.status(400).json({
          message: "User not found",
        });
      }
      return res.status(200).json({
        message: "User found successfully",
        data: existingUser,
      });
    } catch (err) {
      console.log("Error", err);
      res.status(500).json({
        message: "Internal Server Error",
        error: err.message,
      });
    }
  }

  async getAllUsers(req, res) {
    try {
      const users = await userModel.find();
      if (users.length === 0) {
        return res.status(400).json({
          message: "No users found",
        });
      }
      return res.status(200).json({
        message: "Users found successfully",
        data: users,
      });
    } catch (err) {
      console.log("Error", err);
      res.status(500).json({
        message: "Internal Server Error",
        error: err.message,
      });
    }
  }
}
const getUser = new getController();
export default getUser;
