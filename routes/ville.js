var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var ville = req.param('nom_ville');
	res.render('ville', { title: 'Node App', ville: ville });
});

module.exports = router;
