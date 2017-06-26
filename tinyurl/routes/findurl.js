var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:surl', function(req, res, next) {
    db.collection('urls').find({shortUrl: req.params.surl },{_id:0,fullUrl:1}).limit(1).toArray(function(err,data){
      if(data.length > 0){  
        console.log(data[0].fullUrl);
        res.render('short', { surl: data[0].fullUrl});
        res.end();  
      }
     
    });
    
    
    
    
    
    
});

module.exports = router;
