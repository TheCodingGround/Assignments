const express = require("express");
const app = express();
const qs = require("qs");
const request = require("request");

var userConfigs = {
  userKey: "",
  token: "",
  userId: "",
  tokenSecret: ""
};

app.get("/authorize/twitter", (req, res) => {
  console.log("Requesting a refresh token from twitter");
  getRequestToken((err, data) => {
    if (err) {
      res.statusCode(500);
    }
    res.send(
      "<a href='https://api.twitter.com/oauth/authorize?oauth_token=" +
        data.oauth_token +
        "'>Authorize Twitter</a>"
    );
  });
});
app.get("/twitter/callback", (req, res) => {
  var tokenDetails = qs.parse(req.query);




  getAccessToken(
    tokenDetails.oauth_verifier,
    tokenDetails.oauth_token,
    (err, data) => {
      if (err) {
        res.send(
          "<h1>Something went wrong while giving access, please try again.</h1>"
        );
      } else {
        console.log("the access token is: ", data);
        res.send("<h1>congrats, you have authorized us</h1>");
      }
    }
  );
});
function getAccessToken(oauthVerifier, requestToken, cb) {
  var oauth = {
    consumer_key: "Rz63spEaepbrHThkMtr5TJgFj",
    consumer_secret: "1hir1CnQKcH5Ma27EvorqqvRI8vi5F1lgO3jbsTVgM70qB5YII",
    token: requestToken // in the documentation this says that it should be oauth_token but that does not work, it should just be token like the other requests and then it works.
  };
  console.log("oauth = ", oauth);

  request.post(
    {
      url: "https://api.twitter.com/oauth/access_token",
      oauth: oauth,
      qs: { oauth_verifier: oauthVerifier }
    },
    function(e, r, body) {
      console.log("body = ", body);

      if (e) {
        console.log(e);
        cb(e);
        return;
      }

      var data = qs.parse(body);
      cb(null, data);

      function tweet(message) {
        const url = "https://api.twitter.com/1.1/statuses/update.json";

        var oauth = {
          consumer_key: body.user_id,
          consumer_secret: body.oauth_token,
          token: body.oauth_token,
          tokenSecret: body.oauth_token_secret
        };

        var options = {
          url: url,
          oauth: userConfigs,
          qs: { status: "testing api" }
        };

        request.post(options, function(err, httpResponse, body) {
          console.log("http response code", httpResponse.statusCode);
          console.log("http response body", httpResponse.body);

          if (err) {
            console.log(err);
          }
        });
      }
    }
  );
}

app.get("/", (req, res) =>
  res.send("<h1>Hi there welcome to status wave...</h1>")
);

app.listen(3000, () =>
  console.log("The server started correctly and is listening on port 3000!")
);

function tweet(message) {
  const url = "https://api.twitter.com/1.1/statuses/update.json";

  var oauth = {
    consumer_key: "Rz63spEaepbrHThkMtr5TJgFj",
    consumer_secret: "1hir1CnQKcH5Ma27EvorqqvRI8vi5F1lgO3jbsTVgM70qB5YII"
    // token: token,
    //tokenSecret: tokenSecret
  };

  var options = {
    url: url,
    oauth: oauth,
    qs: { status: "testing api" }
  };

  request.post(options, function(err, httpResponse, body) {
    console.log("http response code", httpResponse.statusCode);
    console.log("http response body", httpResponse.body);

    if (err) {
      console.log(err);
    }
  });
}
function getRequestToken(cb) {
  var oauth = {
    callback: "http://localhost:3000/twitter/callback",
    consumer_key: "Rz63spEaepbrHThkMtr5TJgFj",
    consumer_secret: "1hir1CnQKcH5Ma27EvorqqvRI8vi5F1lgO3jbsTVgM70qB5YII"
  };
  request.post(
    {
      url: "https://api.twitter.com/oauth/request_token",
      oauth: oauth
    },
    function(e, r, body) {
      if (e) {
        console.log(e);
        cb(e);
        return;
      }

      var data = qs.parse(body);
      cb(null, data);
    }
  );
}
tweet();
console.log(userConfigs.token);
