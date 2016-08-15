var express = require('express');
var router  = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Roadtrippr' });
});
router.get('/about', function(req, res, next){
  res.render('pages/about', { title: 'About Roadtrippr' });
});

router.post('/', function(req, res, next) {
  var destination = req.body.destination;
  var startingLoc = req.body.startingLoc;
  res.send('<iframe width="70%" height="70%" src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyD_yzTWnGjID6IUWj9PF9IVhIFwYtCp_fM&origin=' + startingLoc + '&destination=' + destination + '"></iframe>')
});

module.exports = router;
