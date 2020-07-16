var express = require('express');
var router = express.Router();
var generateParts = require('../utils/parts-generator')

/* GET home page. */
router.get('/parts', function(req, res, next) {
  res.send(generateParts());
  //res.render('index', { title: 'Express' });
});

module.exports = router;
