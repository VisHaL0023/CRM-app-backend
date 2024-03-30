require("dotenv").config();

const mongoDbUri =
  process.env.MONGODB_URI || "mongodb://localhost:27017/crmApp";
const dbName = "crmapp-db";
module.exports = { mongoDbUri, dbName };
