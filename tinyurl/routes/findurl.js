var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:surl', function(req, res, next) {
   res.render('short', { surl: "www.google.com"});
});

module.exports = router;
