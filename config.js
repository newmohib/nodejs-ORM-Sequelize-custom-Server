const path = require("path");

// import .env variables
require("dotenv-safe").load({
  path: path.join(__dirname, "./.env"),
  sample: path.join(__dirname, "./.env.example")
});

var enableAuthorization = (process.env.ENABLE_AUTHORIZATION === 'true');
var enableBodyParser = (process.env.ENABLE_BODY_PARSER === 'true');
var secretKeyAuthorization = process.env.SECRET_KEY_AUTHORIZATION;
//database
var database = process.env.DB_DATABASE;
var username = process.env.DB_USERNAME;
var password = process.env.DB_PASSWORD;
var host = process.env.DB_HOST;
var dialect = process.env.DB_DIALECT;
module.exports = {
  enableAuthorization: enableAuthorization,
  enableBodyParser: enableBodyParser,
  secretKeyAuthorization: secretKeyAuthorization,
  database: database,
  username: username,
  password: password,
  host: host,
  dialect: dialect,
};