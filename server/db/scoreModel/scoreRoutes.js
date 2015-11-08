var scoreController = require('./scoreController.js');

module.exports = function (app){

	app.post('/submit', scoreController.submit);
}