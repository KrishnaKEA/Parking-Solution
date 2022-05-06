import Router from "express";
import passport from "passport";
import User from "../Model/User.js"
const router = Router();
 
router.post('/signup',(req,res,next)=>{
const {first_name,last_name,email,password} = req.body;
const userDetail = new User({
    first_name: first_name,
    last_name: last_name,
    email: email,
    password: password 
})
})
