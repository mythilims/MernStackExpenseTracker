const mongoose = require("mongoose");
const dotevn = require("dotenv");
dotevn.config();
const uri = process.env.MONGOURU;
const dbConnection = async () => {
  console.log("start");
  try {
    await mongoose.connect(uri);
    console.log("connected");
    // process.exit(0);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

module.exports = dbConnection;
