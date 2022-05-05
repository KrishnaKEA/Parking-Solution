import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import encrypt from 'mongoose-encryption';
const { Schema, model} = mongoose;

const userSchema = new Schema({
    first_name: { type: String, default: null },
    last_name: { type: String, default: null },
    email: { type: String, unique: true },
    password: { type: String }
});

const secret = process.env.TOP_SECRET;
userSchema.plugin(encrypt, {secret: secret, encryptedFields : ["password"]});

const User = new model('User', userSchema);

export default User;