var express = require("express");
var app = express();
var request = require("request");

const url = "https://api.twitter.com/1.1/statuses/update.json";
var oauth = {
  consumer_key: "",
  consumer_secret: "",
  token: "",
  token_secret: ""
};
var whatToDo = {
  url: url,
  oauth: oauth,
  qs: { status: "Hello World..testing statuswave app currently busy with" }
};
request.post(whatToDo, function(err, httpRes, body) {
  console.log("http res code", httpRes.statusCode);
  console.log("http res body",httpRes.body);
  if (err) {
    console.log(err);
  }
});

app.get("/", function(req, res) {
  res.send("Hello World");
});

app.listen(3000, () => console.log("this is working"));
