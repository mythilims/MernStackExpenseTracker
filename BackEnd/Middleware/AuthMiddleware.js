const jswebtoken = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
let my_secret_Key = process.env.JWT_SECRET_KEY;
const authMiddleWare = (req, res, next) => {
  const authHeader = req.header("Authorization");
  console.log(authHeader, ":test");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ token: "Token not found", message: "Token not found" });
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jswebtoken.verify(token, my_secret_Key);
    req.user = decoded;
    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      const error = new Error("Token has expired. Please log in again.");
      error.statusCode = 401;
      return next(error);
    }
    return res.status(403).json({
      message: "Invalid or expired token",
      TokenExpiredError,
      token: "",
    });
  }
};

module.exports = authMiddleWare;
