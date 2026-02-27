require('dotenv').config();

const mongodb_user = process.env.MONGODB_USER;
const mongodb_password = process.env.MONGODB_PASSWORD;

const MongoClient = require("mongodb").MongoClient;
const atlasURI = `mongodb+srv://${mongodb_user}:${mongodb_password}@cluster0.dcewv7i.mongodb.net/?appName=Cluster0`;
var database = new MongoClient(atlasURI);
module.exports = {database};
