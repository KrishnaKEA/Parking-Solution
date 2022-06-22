import rateLimit from "express-rate-limit";
import jwt from "jsonwebtoken";
import User from "./Model/user.js";


//Limit requests for /login 
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
	max: 6, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers

});



const verifyToken = (req, res, next) => {
    const cookie = req.cookies["jwt-OAK"];
  
    if (!cookie) {
      return res.status(403).send("unauthenticated");
    }
    try {
        
        const decoded = jwt.verify(cookie, process.env.SECRET_KEY);
        req.user = decoded;


        // Checking for current user if email is the same
        if(req.user.email != req.params.email){
            return res.status(401).send("unauthorized");
        }else{
            next(); 
        }

  
    } catch (err) {
        console.log(err);
      return res.status(401).json(err);
    }

};

const verifyPlateNumber = async (req, res, next) => {
    const cookie = req.cookies["jwt-OAK"];
  
    if (!cookie) {
      return res.status(403).send("unauthenticated");
    }
    try {
        
        const decoded = jwt.verify(cookie, process.env.SECRET_KEY);
        

        const user = await User.findOne({ _id: decoded.user_id })
        

        // Checking for current user if plate number is the same
        if(user.plateNumber != req.params.plateNr){
            return res.status(401).send("unauthorized");
        }else{
            next(); 
        }

  
    } catch (err) {
        console.log(err);
      return res.status(401).json(err);
    }

};
  
  
const adminOnly = (req, res, next) => {
   
    const cookie = req.cookies["jwt-OAK"];
  
    if (!cookie) {
      return res.status(403).send("unauthenticated");
    }
    try {
        
        const decoded = jwt.verify(cookie, process.env.SECRET_KEY);
        req.user = decoded;


        // Checking if admin
        if( !(req.user.email === "adrian.nk52x@gmail.com" || req.user.email === "krishnaamen@gmail.com" || req.user.email === "ofarah25@gmail.com" ) ){
            console.log("no access");
            return res.status(401).send("Access Denied");
        }  
        next();

  
    } catch (err) {
        console.log(err);
      return res.status(401).json(err);
    }

}



  export { verifyToken, verifyPlateNumber, adminOnly, authLimiter };