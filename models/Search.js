var mongoose = require('mongoose');

var Search = mongoose.Schema){
  starting_point: {type: String, required: true},
  destination: {type: String, required: true}
}

module.exports = mongoose.model('Search', Search)
