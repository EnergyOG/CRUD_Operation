import mongoose, { Schema } from "mongoose";
import * as yup from "yup";

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

const userYupSchema = yup.object({
    username: yup.string().required("Must be a valid username"),
    email: yup.string().required("Must be a valid email"),
    password:yup.string().required("Must be a valid Password").min(6, "Password must be at least 6 characters long")
})

export default mongoose.model("User", userSchema);
export { userYupSchema };