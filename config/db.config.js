require("dotenv").config();

const mongoDbUri = process.env.MONGODB_URI;
const dbName = "crmApp";
module.exports = { mongoDbUri, dbName };
