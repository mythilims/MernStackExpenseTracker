const jswebtoken = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../Models/User.model");

const logniController = async (req, res) => {
  const { email, password } = req.body;
  let existsUser = await User.findOne({ email }).select(
    "username email password _id"
  );
 
  let passWrdVerify =await bcrypt.compare(password, existsUser.password);
  if (!passWrdVerify) {
    res
      .status(401)
      .json({ message: "invalid  Credentials", passWrdVerify, token: "" ,error:''});
    return;
  }
  let token = jswebtoken.sign({ id: existsUser._id }, "mysecretkey", {
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
    password: await bcrypt.hash(password, 8),
    email,
  });
  try {
    let newUser = await user.save();
    res.json({ message: "User registered successfully" }, { id: newUser._id });
  } catch (e) {
    res
      .status(500)
      .json({ message: "User not registration failed ", error: e.message });
  }
};

module.exports = { logniController, registerUser };
