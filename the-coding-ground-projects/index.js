const express = require("express");
const app = express();
const qs = require("qs");
const request = require("request");

var oauth = {
  callback: "http://localhost:3000/twitter/callback",
  consumer_key: "Rz63spEaepbrHThkMtr5TJgFj",
  consumer_secret: "1hir1CnQKcH5Ma27EvorqqvRI8vi5F1lgO3jbsTVgM70qB5YII"
};

request.post(
  { url: "https://api.twitter.com/oauth/request_token", oauth: oauth },
  function(e, r, body) {
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
      var oath = qs.parse(body);
      var oauth = {
        consumer_key: "Rz63spEaepbrHThkMtr5TJgFj",
        consumer_secret: "1hir1CnQKcH5Ma27EvorqqvRI8vi5F1lgO3jbsTVgM70qB5YII",
        token: oath.oauth_token,
        token_secret: req_data.oauth_token_secret,
        verifier: oath.oauth_verifier
      };
    });
    app.get("/twitter/callback", (req, res) => {
      var tokenDetails = qs.parse(req.query);
      getAccessToken(
        tokenDetails.oauth_verifier,
        tokenDetails.oauth_token,
        (err, data) => {
          if (err) {
            console.log("error getting access token");
            res.send(
              "<h1>Something went wrong while giving access, please try again.</h1>"
            );
          } else {
            users.push(data); // save the oauth token and secret (somewhere safe) so that we can use it when the user

            console.log("the access token is: ", data);
            res.send("<h1>congrats, you have authorized us</h1>");
          }
        }
      );
    });
  }
);
function getAccessToken(oauthVerifier, requestToken, callback) {
  var oauth = {
    consumer_key: "Rz63spEaepbrHThkMtr5TJgFj",
    consumer_secret: "1hir1CnQKcH5Ma27EvorqqvRI8vi5F1lgO3jbsTVgM70qB5YII",
    token: requestToken // in the documentation this says that it should be oauth_token but that does not work, it should just be token like the other requests and then it works.
  };
}

function getRequestToken(callbackb) {
  var oauth = {
    callback: "http://localhost:3000/twitter/callback",
    consumer_key: "Rz63spEaepbrHThkMtr5TJgFj",
    consumer_secret: "1hir1CnQKcH5Ma27EvorqqvRI8vi5F1lgO3jbsTVgM70qB5YII"
  };
}

app.get("/", (req, res) =>
  res.send("<h1>Hi there welcome to status wave...</h1>")
);

app.listen(3000, () =>
  console.log("The server started correctly and is listening on port 3000!")
);
