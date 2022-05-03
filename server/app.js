import express from 'express';
const app = express();

import mongoose from 'mongoose';
import helmet from 'helmet';
import cors from "cors"
import morgan from "morgan"
import dotenv from "dotenv";
dotenv.config();

app.use(helmet());
app.use(morgan('tiny')); // display in console HTTP requests
app.use(cors({
    credentials: true,
    origin: 'http://localhost:8080'
}));


mongoose.connect(
    process.env.MONGO_URL, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected to MongoDB successfully");
  });




const server = app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
});