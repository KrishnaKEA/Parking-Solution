import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
    first_name: { type: String, default: null },
    last_name: { type: String, default: null },
    email: { type: String, unique: true },
    plateNumber: { type: String },
    password: { type: String }
});



const User = model('User', userSchema);

export default User;