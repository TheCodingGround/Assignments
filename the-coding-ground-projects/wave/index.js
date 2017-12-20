"use strict";
var express = require("express"),
  app = express(),
  qs = require("qs"),
  request = require("request"),
  userConfigs = { userKey: "", token: "", userId: "", tokenSecret: "" };
app.get("/authorize/twitter", function(a, b) {
  console.log("Requesting a refresh token from twitter"),
    getRequestToken(function(c, d) {
      c && b.statusCode(500),
        b.send(
          "<a href='https://api.twitter.com/oauth/authorize?oauth_token=" +
            d.oauth_token +
            "'>Authorize Twitter</a>"
        );
    });
}),
  app.get("/twitter/callback", function(a, b) {
    var c = qs.parse(a.query);
    getAccessToken(c.oauth_verifier, c.oauth_token, function(d, f) {
      d
        ? b.send(
            "<h1>Something went wrong while giving access, please try again.</h1>"
          )
        : (console.log("the access token is: ", f),
          b.send("<h1>congrats, you have authorized us</h1>"));
    });
  });
function getAccessToken(a, b, c) {
  var d = {
    consumer_key: "Rz63spEaepbrHThkMtr5TJgFj",
    consumer_secret: "1hir1CnQKcH5Ma27EvorqqvRI8vi5F1lgO3jbsTVgM70qB5YII",
    token: b
  };
  console.log("oauth = ", d),
    request.post(
      {
        url: "https://api.twitter.com/oauth/access_token",
        oauth: d,
        qs: { oauth_verifier: a }
      },
      function(f, g, h) {
        if ((console.log("body = ", h), f)) return console.log(f), void c(f);
        var j = qs.parse(h);
        c(null, j);
      }
    );
}
app.get("/", function(a, b) {
  return b.send("<h1>Hi there welcome to status wave...</h1>");
}),
  app.listen(3e3, function() {
    return console.log(
      "The server started correctly and is listening on port 3000!"
    );
  });
function tweet() {
  request.post(
    {
      url: "https://api.twitter.com/1.1/statuses/update.json",
      oauth: {
        consumer_key: "Rz63spEaepbrHThkMtr5TJgFj",
        consumer_secret: "1hir1CnQKcH5Ma27EvorqqvRI8vi5F1lgO3jbsTVgM70qB5YII"
      },
      qs: { status: "testing api" }
    },
    function(f, g) {
      console.log("http response code", g.statusCode),
        console.log("http response body", g.body),
        f && console.log(f);
    }
  );
}
function getRequestToken(a) {
  request.post(
    {
      url: "https://api.twitter.com/oauth/request_token",
      oauth: {
        callback: "http://localhost:3000/twitter/callback",
        consumer_key: "Rz63spEaepbrHThkMtr5TJgFj",
        consumer_secret: "1hir1CnQKcH5Ma27EvorqqvRI8vi5F1lgO3jbsTVgM70qB5YII"
      }
    },
    function(c, d, f) {
      if (c) return console.log(c), void a(c);
      var g = qs.parse(f);
      a(null, g);
    }
  );
}
tweet(), console.log(userConfigs.token);