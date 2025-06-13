const jswebtoken = require("jsonwebtoken");
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
    const decoded = jswebtoken.verify(token, "mysecretkey");
    req.user = decoded;
    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({
          message: "Token has expired. Please log in again.",
          token: "",
        });
    }
    return res
      .status(403)
      .json({
        message: "Invalid or expired token",
        TokenExpiredError,
        token: "",
      });
  }
};

module.exports = authMiddleWare;
