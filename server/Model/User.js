import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
const { Schema, model} = mongoose;

const userSchema = new Schema({
    first_name: { type: String, default: null },
    last_name: { type: String, default: null },
    email: { type: String, unique: true },
    password: { type: String }
});



const User = new model('User', userSchema);

export default User;