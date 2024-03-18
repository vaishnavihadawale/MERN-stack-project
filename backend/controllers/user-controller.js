import User from "../model/User.js";
import bcrypt from "bcryptjs";
import Jwt from  "jsonwebtoken";
const jwtKey='blog'



export const getAllUser = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
    console.log("users: ", users);
  } catch (error) {
    console.log("error: ", error);
  }
  if (!users) {
    return res.status(404).json({ message: "No user found" });
  }
  return res.status(200).json({ allUser:users });
};

export const signup = async (req, res, next) => {
  console.log("req.body: ", req.body);
  const { name, email, password, location, date } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log("err: ", err);
  }
  if (existingUser) {
    return res
      .status(400)
      .json({ message: "User already exist!Login instaed" });
  }
  const hashPassword = bcrypt.hashSync(password);
  const user = new User({
    name,
    email,
    password: hashPassword,
    location,
    date,
    blogs:[]
  });
  console.log("user123: ", user);
  try {
    await user.save();
    console.log("user save successfully");
  } catch (err) {
    return console.log("err: ", err);
  }
  return res.status(201).json({ user, message: " User save successfully" });
};

export const login = async (req, res, next) => {
  console.log("req.body: ", req.body);
  const { email, password } = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({ email });
    console.log("existingUser123: ", existingUser);
  } catch (err) {
    return console.log("err: ", err);
  }
  if (!existingUser) {
    return res
      .status(404)
      .json({ message: "User By this Emailid couldn't find" });
  }

  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
  if (!isPasswordCorrect) {
    return res.status(404).json({ message: "Password Incorrect" });
  }
  Jwt.sign({existingUser},jwtKey,{expiresIn:"1h"}, (error,token)=>{
    if(error){
      res.status(487) .json({message:"Something went wrong!!"})
    }
    return res.status(201).json({token:token, message: "Login successfully" });
  })
  
};

export const verifyToken =(req,res,next)=>{
  let token=req.headers['authorization'];
  
  console.log("middleware called",token);

  if(token){
    token=token.split(' ')[1];
    console.log("split token",token);
    Jwt.verify(token,jwtKey,(error,success)=>{
      if(error){
        res.status(209) .json({message:"please provide valiod token"});
      }
      else{
         const decodetoken=Jwt.decode(token,{complete:true})
        console.log('decodetoken: ', decodetoken);
          Jwt.decode(token,{complete:true})
            req.user = {
             
              userid: decodetoken.payload.existingUser._id,
              
            }
            console.log(' req.user: ',  req.user);
          
        
        next();
      }

    });
  }
  else{
    res.status(409) .json({message:'please add token to header'})

  }
  

}