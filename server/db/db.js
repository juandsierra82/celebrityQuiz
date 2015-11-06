var mongoose = require('mongoose');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  var User = require('./userModel/userModel.js')
  var Score = require('./scoreModel/scoreModel.js')
  var Questions = require('./questionModel/questionModel.js')
  console.log('connected to the database')
});

module.exports = db;