var express    = require('express');
var router     = express.Router();
var bodyParser = require('body-parser');
var request    = require('request')
//Controller
var pagesController = require('../controllers/pages')
var searchController = require('../controllers/search')

router.route('/')
  .get(pagesController.index);


  // api search routes

router.route('/api/search')
  .get(searchController.index)
  .post(searchController.create);

module.exports = router;

if (path === '/searchresults' || path === '/savedsearches') {
  require('./controllers/search').get(req, res);
