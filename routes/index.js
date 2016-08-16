var express = require('express');
var router  = express.Router();
var request = require('request');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Roadtrippr' });
});
router.get('/about', function(req, res, next){
  res.render('pages/about', { title: 'About Roadtrippr' });
});

router.post('/', function(req, res, next) {

  // res.send(<'iframe width="70%" height="70%" src="https://api.forecast.io/forecast/9363c7ddfdea32d3ccd82b5c780b74d1/hourly' + latitude' +  'longitude'"></iframe>', function (error, response, body) {
  //   if (!error && response.statusCode == 200) {
  //     console.log(body) // Print the google web page.
  //   }
  // })

  // Directions
  var endScript = '<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD_yzTWnGjID6IUWj9PF9IVhIFwYtCp_fM&callback=initMap"> </script>'
  var destination = req.body.destination;
  var startingLoc = req.body.startingLoc;
  res.send('<iframe width="70%" height="70%" src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyD_yzTWnGjID6IUWj9PF9IVhIFwYtCp_fM&origin=' + startingLoc + '&destination=' + destination + '"></iframe>' + endScript)

  // Waypoints



});



module.exports = router;
