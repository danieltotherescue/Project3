var express         = require('express');
var router          = express.Router();
var bodyParser      = require('body-parser');
//Controller
var pagesController = require('../controllers/pages')

router.route('/')
  .get(pagesController.index)
  .post(pagesController.post)

router.route('/show')
  .get(pagesController.show)
  .put(pagesController.update)
