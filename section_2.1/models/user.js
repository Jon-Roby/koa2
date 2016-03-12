var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true},
  posts: {type: Array}
});

module.exports = mongoose.model('User', UserSchema);
