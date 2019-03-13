var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
	var ville = req.body.nom_ville;
	var description = req.body.description;
	res.render('ville', { title: 'Node App', ville: ville, description: description });
});

module.exports = router;
