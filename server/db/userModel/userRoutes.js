var userController = require('./userController.js');

module.exports = function (app){

	app.post('/signup', userController.addUser);
	app.post('/scores', userController.submitScore);

}