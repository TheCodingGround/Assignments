const express = require('express');
const app = express();

const queryStringParser = require('querystring');

app.get("/", function(request, response) {
  console.log(request.query);
  response.send("<h1>Welcome to our little app's home page.</h1>");
});

app.get("/hello", function(request, response) {
  var name = request.query.name;

  response.send("Hello " + name);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))

// this is just a comment
