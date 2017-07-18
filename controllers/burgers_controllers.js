var express = require('express');
var router = express.Router();
var db = require('../models')
var yetToDevourCounter = 0;
var alreadyDevouredCounter = 0;

router.get('/', function (req, res) {
  res.redirect('/index');
});

router.get('/index', function (req, res) {
  db.Burger.findAll({}).then(function(data) {

    res.render("index", {
      burger: data,
      helpers: {
        nonDevouredCounter: function() {
          yetToDevourCounter++;
          return yetToDevourCounter;

        },
        devouredCounter: function() {
          alreadyDevouredCounter++
          return alreadyDevouredCounter;
        }
      }
    });
    yetToDevourCounter = 0;
    alreadyDevouredCounter = 0;
  });
});

router.post('/',function(req,res){

db.Burger.create( {'burger_name':req.body.burgerName,
devoured:false}).then(
function(){
  res.redirect('/index');
})
})

router.put('/:id',function(req,res){
  var condition = "id = " + req.params.id;
db.Burger.update({devoured:true},{where: { id: req.params.id}}).then(function(){
  res.redirect('/index');
})
})


module.exports = router;
