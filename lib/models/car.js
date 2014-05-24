var mongoose = require('mongoose'),
  Schema = mongoose.Schema

var CarSchema = new Schema({
  name: String
})

mongoose.model('Car', CarSchema)