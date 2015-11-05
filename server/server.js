var express     = require('express');
var mongoose = require('mongoose');
var app = express();


	app.get('/', function (req, res) {
	  res.send('Hello World!');
	});



	mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/quiz');

	module.exports = app;

