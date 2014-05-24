var mongoose = require('mongoose'),
  Driver = mongoose.model('Driver');

exports.all = function(req, res) {
  return Driver.find(function (err, drivers) {
    if (!err) {
      return res.json(drivers);
    } else {
      return res.send(err);
    }
  });
};