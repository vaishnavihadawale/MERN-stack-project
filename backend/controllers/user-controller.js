import User from "../model/User.js";
import bcrypt from 'bcryptjs';
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
  return res.status(200).json({ users });
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
  const hashPassword=bcrypt.hashSync(password);
  const user = new User({
    
    name,
    email,
    password:hashPassword,
    location,
    date,
  });
  console.log('user123: ', user);
  try {
    await user.save();
    console.log("user save successfully");
  } catch (err) {
    return console.log("err: ", err);
  }
  return res.status(201).json({ user, message: " User save successfully" });
};

export const login=async(res,req,next)=>{
    const {email,password}=req.body;
    let existingUser;
    
    try{
        existingUser=await User.findOne({email});
        console.log('existingUser: ', existingUser);
    }catch(err){
        return console.log('err: ', err);

    }
    if(!existingUser){
        return res.status(404) .json({message:"User By this Emailid couldn't find});
    }
}