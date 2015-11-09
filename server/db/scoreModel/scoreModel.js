var 	mongoose 	= require('mongoose'),
			Schema		=	mongoose.Schema;


var ScoreSchema = new mongoose.Schema({
	
_player: {
			type: Schema.Types.ObjectId,
			ref: 'Users'
	},




});

module.exports = mongoose.model('Scores', ScoreSchema);


