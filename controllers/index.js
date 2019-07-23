var database = require('../database');

module.exports = {
connect (req, res, next) {
    database.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    let success='Connection has been established successfully.';
    res.send(success);
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
    let error='Unable to connect to the database:';
    res.send(error);
  });
}
}