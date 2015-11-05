var mongoose = require('mongoose');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  var User = require('./userModel/userModel.js')
  console.log('connected to the database')
});

module.exports = db;