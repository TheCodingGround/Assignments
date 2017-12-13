var express = require("express");
var app = express();
var request = require("request");
var querryString = require("querystring");
var qs = require("querystring"),
  oauth = {
    callback: "http://localhost:3000/twitter/callback",
    consumer_key: "Rz63spEaepbrHThkMtr5TJgFj",
    consumer_secret: "1hir1CnQKcH5Ma27EvorqqvRI8vi5F1lgO3jbsTVgM70qB5YII"
  },
  url = "https://api.twitter.com/oauth/request_token";
request.post({ url: url, oauth: oauth }, function(e, r, body) {
  console.log(body);
  var req_data = qs.parse(body);
  var uri =
    "https://api.twitter.com/oauth/authenticate" +
    "?" +
    qs.stringify({ oauth_token: req_data.oauth_token });
  var auth_data = qs.parse(body),
    oauth = {
      consumer_key: "Rz63spEaepbrHThkMtr5TJgFj",
      consumer_secret: "1hir1CnQKcH5Ma27EvorqqvRI8vi5F1lgO3jbsTVgM70qB5YII",
      token: auth_data.oauth_token,
      token_secret: req_data.oauth_token_secret,
      verifier: auth_data.oauth_verifier
    },
    url = "https://api.twitter.com/oauth/access_token";
  request.post({ url: url, oauth: oauth }, function(e, r, body) {
    var perm_data = qs.parse(body),
      oauth = {
        consumer_key: CONSUMER_KEY,
        consumer_secret: CONSUMER_SECRET,
        token: perm_data.oauth_token,
        token_secret: perm_data.oauth_token_secret
      },
      url = "https://api.twitter.com/1.1/users/show.json",
      qs = {
        screen_name: perm_data.screen_name,
        user_id: perm_data.user_id
      };
    request.get({ url: url, oauth: oauth, qs: qs, json: true }, function(
      e,
      r,
      user
    ) {
      console.log(user);
    });
  });
});
// const ipa = "https://api.twitter.com/1.1/statuses/update.json";
// var oauth = {
//   consumer_key: "",
//   consumer_secret: "",
//   token: "",
//   token_secret: ""
// };
// var whatToDo = {
//   url: url,
//   oauth: oauth,
//   qs: { status: "Hello World..testing statuswave app currently busy with" }
// };
// request.post(whatToDo, function(err, httpRes, body) {
//   console.log("http res code", httpRes.statusCode);
//   console.log("http res body", httpRes.body);
//   if (err) {
//     console.log(err);
//   }
// });

app.get("/", function(req, res) {
  res.send(
    "<a href= 'https://api.twitter.com/oauth/access_token'>click here to verify</a>"
  );
});

app.listen(3000, () => console.log("this is working"));
