const jswebtoken = require("jsonwebtoken");
const User = require("../Models/User.model");
const dotenv = require("dotenv");
dotenv.config();
let my_secret_Key =process.env.JWT_SECRET_KEY;
const logniController = async (req, res) => {  
  const { email, password } = req.body;
  let existsUser = await User.findOne({ email }).select(
    "username email password _id"
  );   
    const passWrdVerify = await existsUser.matchPassword(password);
  if (!passWrdVerify) {
    res
      .status(401)
      .json({ message: "invalid  Credentials", passWrdVerify, token: "" ,error:''});
    return;
  }
  let token = jswebtoken.sign({ id: existsUser._id }, my_secret_Key, {
    expiresIn: "1h",
  });
  res.json({
    message: "login sucessful",
    passWrdVerify,
    token,
    userDetails: existsUser,
  });
};

const registerUser = async (req, res) => {
  const { email, username, password } = req.body;  
  const isExistUser = await User.findOne({ email }).select(
    "username email -_id"
  );  // exclude  -_id  {userName,email }
  if (isExistUser) {
    res.status(400).json({ message: "User email already exists" , error: isExistUser.email });
    return;
  } 
  const user = new User({
    username,
    password,
    email,
  });
  try {
    let newUser = await user.save();    
    res.json({ message: "User registered successfully",userDetails :newUser});
  } catch (e) {
    res
      .status(500)
      .json({ message: "User not registration failed ", error: e.message });
  }
};

module.exports = { logniController, registerUser };
