var Quiz 			= require('./quizModel.js'),
		User  		= require('../userModel/userModel.js'),
		Q					=	require('q'),
		mongoose	=	require('mongoose');


module.exports = {

	getQuiz: function(req, res, next){
		var findQuiz = Q.nbind(Quiz.findOne, Quiz);

		var quizname = req.body.quizname,
				questions = req.body.questions;
		findQuiz({quizname: quizname})
			.then(function (quiz){
				if(!user){
					next(new Error('Quiz does not exist'))
				} else {
					res.send(quiz);
				}
			})
			.fail(function (error) {
        next(error);
      });

	},

	addQuiz: function(req, res, next){
		var findQuiz = Q.nbind(Quiz.findOne, Quiz);

		var quizname = req.body.quizname,
				questions = req.body.questions;

		findQuiz({quizname: quizname})
			.then(function (quiz){
				if(!user){
					var newQuiz = new User ();
					newUser.save(function (err){
						if (err){
							console.log(err);
						}
						newQuiz.quizname = quizname;
						newQuiz.questions = questions;
					})
				} else {
					next(new Error('Quiz already exists'))
				}
			})
			.fail(function (error) {
        next(error);
      });
	}
}