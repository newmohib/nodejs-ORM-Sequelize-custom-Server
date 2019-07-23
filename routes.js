var express = require('express');
var cors = require('cors')
 
var router = express.Router();
router.use(cors())
var helloMiddlewares = require('./helpers/middlewares');
var indexController = require('./controllers/index');

// var loginController = require('./controllers/loginController');
// var signupController = require('./controllers/signupController');
// var campaignController = require('./controllers/campaignController');
// var tokenController = require('./controllers/tokenController');


//login
// router.post('/login', loginController.login);
// router.post('/signup', signupController.signup);
// router.post('/token', helloMiddlewares.authorizeWithToken , tokenController.token);

 router.get('/connect', indexController.connect);
module.exports = router;



