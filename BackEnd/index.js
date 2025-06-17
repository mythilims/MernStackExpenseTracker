console.log("Node Start");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
let PORT = process.env.PORT || 3000;
let HOST_NAME = process.env.HOST_NAME;
const app = express();
app.use(express.json());
app.use(cors());
const expenseTracker = require("./Router/ExpenseTracker/ExpenseTrackerRouter.js");
const dbConnection = require("./DataBase/DB.js");
const authLogin = require("./Router/UserRouter/UserRouter.js");
const fs = require("fs");
const path = require("path");
dbConnection();

app.use("/", authLogin);
app.use("/expense", expenseTracker);
app.use((error, req, res, next) => {
  const logDir = path.join(__dirname, "Log");
  const logPath = path.join(logDir, "log.txt");
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
  }
  const logEntry = `[${new Date().toISOString()}] ${
    error.stack || error.message || error
  }\n`;

  fs.appendFile(logPath, logEntry, (err) => {
    if (err) {
      console.log("❌ Log Write Failed:", err);
    }
  });
  
  res.status(500).json({ message: error.message,error: "Internal Server Error" });
});
app.set("views", "./Views");
app.set("view engine", "pug");

app.listen(PORT, HOST_NAME, () => {
  console.log(`am a server PORT:${HOST_NAME}:${PORT}`);
});
console.log("Node End");
