var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect();

module.exports = {mongoose};