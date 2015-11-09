var express     = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db/db.js');
var app = express();

	app.use(morgan('dev'));


	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());

	app.use('/',express.static(__dirname + '../../quiz/www'));

	//routers

	var userRouter = express.Router();
	var scoreRouter = express.Router();
	var quizRouter = express.Router();

	app.use('/api/users', userRouter);
	app.use('/api/score', scoreRouter);
	// app.use('/api/quiz', quizRouter);


	//db routes set up

	require('./db/userModel/userRoutes.js')(userRouter);
	//took out the quiz schema; questions will be dynamically loaded by page
  // require('./db/questionModel/quizRoutes.js')(quizRouter);
  require('./db/scoreModel/scoreRoutes.js')(scoreRouter);

  //connection to db
	mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/quiz');

	module.exports = app;

