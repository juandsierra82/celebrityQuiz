var 	mongoose 	= require('mongoose'),
			Schema		=	mongoose.Schema;

var UserSchema = new mongoose.Schema({
	
	username: {
		type: String,
		required: true,
		unique: false
	},

	email: {
		type: String,
		required: true,
		unique: true
	},

_quizzes: [
	{
		type: Schema.Types.ObjectId,
		ref: 'Quizes'
	}
]

});

module.exports = mongoose.model('Users', UserSchema);