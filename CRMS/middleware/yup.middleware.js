import { userYupSchema } from "../model/userModel.js";

export const validateUser = async (req, res, next) => {
  try {
    await userYupSchema.validate(req.body, { abortEarly: false });
    next(); 
  } catch (err) {
    return res.status(400).json({
      message: "Validation Error",
      errors: err.errors,
    });
  }
};