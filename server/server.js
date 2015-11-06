var express     = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db/db.js')
var app = express();

	app.use(morgan('dev'));


	app.use(bodyParser.urlencoded({extended: true}));

	app.use('/',express.static(__dirname + '../../quiz/www'));

	mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/quiz');

	module.exports = app;

