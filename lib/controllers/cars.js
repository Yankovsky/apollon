var mongoose = require('mongoose'),
  Car = mongoose.model('Car');

exports.all = function(req, res) {
  return Car.find(function (err, cars) {
    if (!err) {
      return res.json(cars);
    } else {
      return res.send(err);
    }
  });
};