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
=======

const User =  model('User', userSchema);

>>>>>>> 6ffba91f719caee3519ff0280f1b5e91e8181a77
export default User;
