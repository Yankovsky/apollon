var mongoose = require('mongoose'),
  Schema = mongoose.Schema

var DriverSchema = new Schema({
  name: String
})

mongoose.model('Driver', DriverSchema)