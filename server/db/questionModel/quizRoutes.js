var quizController = require('./quizController.js');

module.exports = function (app){

	app.get('/search', quizController.getQuiz);
	app.post('/search', quizController.addQuiz)

}