var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient

var x = 1;

/* GET users listing. */
router.post('/', function(req, res, next) {
    var url = req.body.url;
    
    x = x + 1;
  /*  MongoClient.connect('mongodb://umang:umang123@ds135382.mlab.com:35382/short_url', function (err, db) {
  if (err) throw err

  db.collection('urls').insert({fullUrl:url});
});*/
    
    
    console.log(x);
    res.send(url);
});

module.exports = router;
