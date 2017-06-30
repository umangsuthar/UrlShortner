var express = require('express');
var router = express.Router();

var map = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

/* GET users listing. */
router.post('/', function(req, res, next) {
    var url1 = req.body.url;
    
    var shorturl = '';
    
    var index;
       db.collection('urls').find({fullUrl:url1}).toArray(function(err,item){
                if ( item.length > 0 )     {
                    console.log("already short");
                    console.log(item);
                    res.send("http://localhost:3000/"+item[0].shortUrl);
                }
           else{
                console.log("NOT NOT found");
          
                    db.collection('urls').find({},{_id:0,index:1}).sort({index:-1}).limit(1).toArray(function(err,item){

                                    index = item[0].index + 1;
                                    console.log(index);


                                var temp = index;
                                //url shortner

                                while(index > 0)
                                {
                                    shorturl += map[index%62];
                                    index = Math.round(index/62);
                                }

                                db.collection('urls').insert({fullUrl:url1,index:temp,shortUrl:shorturl});



                                console.log(shorturl);
                                res.send("http://localhost:3000/"+shorturl);
                       });
            
               
                }
       });
               
});
    
module.exports = router;
