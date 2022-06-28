const mongoose = require("mongoose");

const ConnectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("DB is connected");
  } catch (error) {
    console.log("DB connection failed : ", error);
  }
};

module.exports = ConnectDb;