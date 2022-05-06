import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
//import md5 from 'md5';
import mongoose from "mongoose";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import User from "./Model/User.js";


app.use(helmet());
app.use(morgan("tiny")); // display in console HTTP requests
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:8080",
  })
);

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, err => {
  if(err){
    console.log("connection error: ", err);
  }
  else{
    console.log("Connected to MongoDB successfully");
  }
}); 







const server = app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
