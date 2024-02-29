var express = require('express');
const session = require('express-session');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', function(req, res, next) {
  req.session.ban = true;
  res.render("index");
});


router.get("/checkban",function (req,res){
  if(req.session.ban === true){
    res.send("you are banned at this page because u saw many times uh visited this page")
  }
  else{
    res.send("This site is unbaned")
  }
 
 
})
router.get("/removeban",function(req,res){
  req.session.destroy(function(err){
    if(err) throw err;
    res.send("ban removed");
  })
})

module.exports = router;
