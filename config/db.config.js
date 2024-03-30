require("dotenv").config();

const mongoDbUri =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/crmApp";
const dbName = "crmApp";
module.exports = { mongoDbUri, dbName };
