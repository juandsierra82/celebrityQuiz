var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ScoreSchema = new mongoose.Schema({
	_user: {type: Schema.Types.ObjectId, ref: 'User'},

	quizName: {
		type: String,
		required: true
	},

	score: {
		type: Number,
		required: true
	}
});

module.exports = mongoose.model('Scores', ScoreSchema)