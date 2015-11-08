var 	mongoose 	= require('mongoose'),
			Schema		=	mongoose.Schema;


var ScoreSchema = new mongoose.Schema({
	
_player: {
			type: Schema.Types.ObjectId,
			ref: 'Users'
	},

_quiz: {
		type: Schema.Types.ObjectId,
		ref: 'Quizes'
	},

score: {
		type: Number,
		required: true,
		unique: false
	}

});

module.exports = mongoose.model('Scores', ScoreSchema);


