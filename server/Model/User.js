import mongoose from "mongoose";
const { Schema, model} = mongoose;

const userSchema = new Schema({
    first_name: { type: String, default: null },
    last_name: { type: String, default: null },
    email: { type: String, unique: true },
    password: { type: String }
});

const User = model('user', userSchema);

export default User;