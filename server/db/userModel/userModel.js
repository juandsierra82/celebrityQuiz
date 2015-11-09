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

	score: {
		type: Number,
		required: false,
		unique: false
	}

});

module.exports = mongoose.model('Users', UserSchema);