var 	mongoose 	= require('mongoose'),
			Schema		=	mongoose.Schema;

var UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
	},

	email: {
		type: String,
		required: true,
		unique: true
	},

	scores: [{
		type: Schema.Types.ObjectId, ref: 'Scores'
	}]

})

module.exports = mongoose.model('User', UserSchema);