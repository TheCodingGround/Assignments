var express = require('express');
var cookieParser = require('cookie-parser')
var app = express();
var cors = require('cors');

app.use(cors());
app.use(cookieParser())
app.use(express.static('public'))

app.get('/script.js', function(req, res){
  //this can be done in middleware as well and then we can serve main from static public folder
  //see https://stackoverflow.com/questions/16209145/how-to-set-cookie-in-node-js-using-express-framework as an example
  var cookie = req.cookies && req.cookies.test;

  if (!cookie){
    res.cookie("test", new Date().getTime());
  }else{
    console.log('cookie', cookie);
  }

  res.sendFile('./script.js', {root: __dirname});
});

app.post('/cookie', function(req,res){
  console.log('cookies', req.cookies.test);

  res.status(200).end();
});

app.listen(3000, function(){
  console.log("Listening on port 3000");
});
