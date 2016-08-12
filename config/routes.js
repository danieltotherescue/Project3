var express    = require('express');
var router     = express.Router();
var bodyParser = require('body-parser');
var request    = require('request')

//Controller
var pagesController = require('../controllers/pages')

router.route('/')
  .get(pagesController.index)

module.exports = router;
