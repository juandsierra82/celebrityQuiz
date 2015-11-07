var mongoose = require('mongoose');
var db = mongoose.connection;
var User = require('./userModel/userModel.js');
var Quiz = require('./questionModel/quizModel.js');

db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', function (callback) {

  console.log('connected to the database')

});

module.exports = db;