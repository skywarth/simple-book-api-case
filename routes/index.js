var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/whaddup', function(req, res, next) {
  res.send('hey man whats up!');
});

module.exports = router;
