var express = require('express');
var sales = require('sales.js');
var router = express.Router();

router.get('/:location?', function (req, res, next) {
  res.json(getStubWeatherData(req.params.location));
});

router.get('/json', function (req, res, next) {
  res.json(sales);
});

function getStubWeatherData(location) {
  var currentSeconds = new Date().getSeconds();
  return {
    weather: {
      location: location || 'londonon',
      temperature: `${currentSeconds / 2}\u2103`,
      weatherDescription: currentSeconds % 2 == 0 ? 'partly cloudy' : 'sunny'
    }
  };
}

module.exports = router;
