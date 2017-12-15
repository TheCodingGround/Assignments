const express = require("express");
const app = express();
const qs = require("qs");
const request = require("request");

var oauth = {
    callback: "http://localhost:3000/twitter/callback",
    consumer_key: "Rz63spEaepbrHThkMtr5TJgFj",
    consumer_secret: "1hir1CnQKcH5Ma27EvorqqvRI8vi5F1lgO3jbsTVgM70qB5YII"
  },
  url = "https://api.twitter.com/oauth/request_token";
request.post({ url: url, oauth: oauth }, function(e, r, body) {
  console.log("body = ", body);

  app.get("/authorize/twitter", (req, res) => {
    console.log("Requesting a refresh token from twitter");
    var req_data = qs.parse(body);
    console.log(req_data);
    res.send(
      "<a href='https://api.twitter.com/oauth/authorize?oauth_token=" +
        req_data.oauth_token +
        "'>Authorize Twitter</a>"
      );
      var  oauth =
      { consumer_key: "Rz63spEaepbrHThkMtr5TJgFj"
      , consumer_secret:"1hir1CnQKcH5Ma27EvorqqvRI8vi5F1lgO3jbsTVgM70qB5YII"
      , token: auth_data.oauth_token
      , token_secret: req_data.oauth_token_secret
      , verifier: auth_data.oauth_verifier
      }
    app.listen(3000, () =>
      console.log("The server started correctly and is listening on port 3000!")
    );
  });

  // var uri =
  //   "https://api.twitter.com/oauth/authenticate" +
  //   "?" +
  //   qs.stringify({ oauth_token: req_data.oauth_token });
});

function getRequestToken(cb) {
  var oauth = {
    callback: "http://localhost:3000/twitter/callback",
    consumer_key: "Rz63spEaepbrHThkMtr5TJgFj",
    consumer_secret: "1hir1CnQKcH5Ma27EvorqqvRI8vi5F1lgO3jbsTVgM70qB5YII"
  };
}

app.get("/", (req, res) => res.send("<h1>Hello World!</h1>"));

app.listen(3000, () =>
  console.log("The server started correctly and is listening on port 3000!")
);
