var request = require('request')

module.exports = {
	getJService: function(){
		var questions = [];
		request({
			url: 'http://jservice.io/api/clues',
			agentOptions: {count: 10}

			}).then(function (err, res, body){
					console.log('jService being called', body)
					for(var i = 0; i<10; i++){
						var ques = JSON.parse(body)[i];
						questions.push(ques);
					}
				})
		console.log('these are the questions', questions)
		return questions
	}

}