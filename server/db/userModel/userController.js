var User 				= require('./userModel.js'),
		Q						=	require('q'),
		nodemailer	= require('nodemailer'),	
		mongoose		=	require('mongoose');


var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'gmail.user@gmail.com',
        pass: 'userpass'
    }
});

var mailOptions = {
    from: 'Juan Foo ✔ <baolwen@gmail.com>', // sender address
    subject: 'Hello Juan: These are your test scores ✔', // Subject line
    text: 'Hello  ✔', // plaintext body
};


module.exports = {
	addUser: function (req, res, next){
		console.log('at addUser: following user about to be added', req.body)

		var findUser 	= Q.nbind(User.findOne, User);

		var username 	= req.body.username,
				email 		= req.body.email;

		console.log('this is the information about to be put in the db', username, email)

		findUser({email: email})
			.then(function (user){
				if(!user){
					var newUser = new User ();
					newUser.username = username;
					newUser.email = email;
					newUser.save(function (err){
						if (err){
							console.log('this is the error', err);
						}
						console.log('this is the newUser', newUser)
					})
				} else {
					next(new Error('User already exists'))
				}
			})
			.fail(function (error) {
        next(error);
      });
	},

	submitScore: function(req, res, next){
		console.log('in submitScore', req.body)
		var username 	= req.body.username,
				email 		= req.body.email,
				score     = req.body.score;
		
		mailOptions.to = req.body.email;
		mailOptions.text = mailOptions.text+" "+username+" you scored "+score+" in fake Jeopardy";

		var findUser = Q.nbind(User.findOne, User);
		findUser({email:email})
			.then(function (user){
				user.score = score
				user.save(function (err){
						if (err){
							console.log('this is the error', err);
						}
						console.log('user score saved')
				})
			})
			.then(function(){
			transporter.sendMail(mailOptions, function (err, info){
					if(err){
						return console.log(err);
					}
					console.log('Message sent: '+ info.response);
				})
			})

	},

	getUser: function (req, res, next){
		var findUser = Q.nbind(User.findOne, User);

		var username = req.body.username,
				email = req.body.email;
		
		findUser({email: email})
			.then(function (user){
				if(!user){
					next(new Error('User does not exist'))
				} else {
					res.send(user);
				}
			})
			.fail(function (error) {
        next(error);
      });
	}


}