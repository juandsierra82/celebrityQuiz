var mongoose 	= require('mongoose'),
		Schema 		= mongoose.Schema;

var QSchema = new mongoose.Schema({

	quizName: {
		type: String,
		required: true,
		unique: true,
	},

	questions: {
		type: Array,
		required: true,
		unique: false
	},

	score: {
		type: Number,
		required: true,
		unique: false
	},

	_players: [ 
		{
			type: Schema.Types.ObjectId,
			ref: 'Users'
		}
	]  	

});

module.exports = mongoose.model('Quizes', QSchema);