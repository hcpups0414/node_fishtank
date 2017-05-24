var express = require('express');
var serialport = require('../controllers/SerialController.js');
var router = express.Router();

/* GET home page. */
router.get('/motor/:id', function (req, res, next) {

  switch(req.params.id){

    //關閉
    case '0':
      serialport.write("0", function(){
        console.log("send");
      });
      res.json({
        'status': 'close'
      });
      break;

    //抽水
    case '1':
      serialport.write("1", function(){
        console.log("send");
      });
      res.json({
        'status': 'draw'
      });
      break;

    //噴水
    case '2':
      serialport.write("2", function(){
        console.log("send");
      });
      res.json({
        'status': 'spit'
      });
      break; 

    //關閉  
    default:
      serialport.write("0", function(){
        console.log("send");
      });
      res.json({
        'status': 'close'
      });
      break;
  }  
});

module.exports = router;
