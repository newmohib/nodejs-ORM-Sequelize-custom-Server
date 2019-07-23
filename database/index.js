const Sequelize = require('sequelize');
const config = require('../config');



const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.localhost,
    dialect: config.dialect
  });

 //console.log("config",config);
//   const sequelize = new Sequelize("oauth", "root", "123456", {
//     host: "localhost",
//     dialect:  "mysql"
//   });

  exports.sequelize = sequelize;