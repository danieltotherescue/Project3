var express  = require('express');
var router   = express.Router();
var passport = require('passport');
var searchController = require('../controllers/search');


router.route('/api/search')
  .get(searchController.index)
  .post(searchController.create);

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Roadtrippr', user: req.user });
});

router.get('/about', function(req, res, next) {
  res.render('pages/about', { title: 'About Roadtrippr', user: req.user });
});

router.post('/', function(req, res, next) {
  console.log(req.body)
  var destination = req.body.destination;
  var startingLoc = req.body.startingLoc;
  var hiddenLocation = req.body.hiddenLocation;
  var Search = require('../models/Search');
    console.log('storing a new search!');
  var newSearch = new Search();
  newSearch.starting_point = startingLoc;
  newSearch.destination = destination;
  console.log(newSearch);
  newSearch.save(function(err, savedSearch) {
    if(err) next (err);
  });
  if (startingLoc) {
    res.send('<iframe width="70%" height="70%" src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyD_yzTWnGjID6IUWj9PF9IVhIFwYtCp_fM&origin=' + startingLoc + '&destination=' + destination + '"></iframe>')
  } else {
    res.send('<iframe width="70%" height="70%" src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyD_yzTWnGjID6IUWj9PF9IVhIFwYtCp_fM&origin=' + hiddenLocation + '&destination=' + destination + '"></iframe>')
  }
})



router.get('/auth/google', passport.authenticate(
  'google',
  {scope: ['profile', 'email']}
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
