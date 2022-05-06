import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  email: { type: String, unique: true },
  plateNumber: { type: String },
  password: { type: String },
});

const User = model("User", userSchema);

<<<<<<< HEAD
export default User;
=======

const User = model('User', userSchema);

export default User;
>>>>>>> 8f26673d0af50fb092aeb804835ea0f06427cf55
