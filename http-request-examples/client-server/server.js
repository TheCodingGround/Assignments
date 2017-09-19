const express = require('express')
const app = express()
var path = require('path');
var fs = require('fs');

app.get('/client.html', function(req, res){
    res.sendFile(path.join(__dirname + '/client.html'));
});

app.post('/saveUser', function (req, res) {
    var name = req.query.name;
    var surname = req.query.surname;

    fs.appendFile("./users.txt", `${name} ${surname}\r`, function(err) {
        if(err) {
            console.log(err);
            res.sendStatus(500);
        }else{
            console.log("The file was saved!");
            res.sendStatus(201);
        }
    }); 
})

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})