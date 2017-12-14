const express = require('express')
const app = express()
const qs = require('qs');
const request = require('request');

var users = [];

const config = {
  consumerKey: "qN3WGGMRAbLgSJqVuYIwPwlYP",
  consumerSecret: "CZTWreYqhYeoGDKMikxeMlMwrsZrGNOUbcquj93K41DSm60n0g",
}

app.get('/authorize/twitter', (req, res) => {
  console.log("Requesting a refresh token from twitter");
  getRequestToken((err, data) => {
    if (err){
      res.statusCode(500);
    }
    //console.log('got data', data);
    res.send("<a href='https://api.twitter.com/oauth/authorize?oauth_token=" + data.oauth_token + "'>Authorize Twitter</a>" );
  });
});

app.get('/twitter/callback', (req, res) => {
  var tokenDetails = qs.parse(req.query);

  //we still need to compare the tokenDetails.oauth_token with our original request token to make sure nobody has messed with our stuff and it is twitter calling us back.

  getAccessToken(tokenDetails.oauth_verifier, tokenDetails.oauth_token, (err, data) =>{
    if (err) {
      console.log('error getting access token');
      res.send('<h1>Something went wrong while giving access, please try again.</h1>');
    }else {

      users.push(data); // save the oauth token and secret (somewhere safe) so that we can use it when the user 

      console.log('the access token is: ', data);
      res.send('<h1>congrats, you have authorized us</h1>');
    }
  });
});

app.get('/', (req, res) => res.send('<h1>Hello World!</h1>'));

app.listen(3000, () => console.log('The server started correctly and is listening on port 3000!'))

function tweet(message){
  const url = "https://api.twitter.com/1.1/statuses/update.json";

  var oauth = {
    consumer_key: config.consumerKey,
    consumer_secret: config.consumerSecret,
    token: token,
    tokenSecret: tokenSecret
  };

  var options = {
    url: url,
    oauth:oauth,
    qs: {status: "Hello World"}
  };

  request.post(options,
               function(err,httpResponse,body){
                 console.log("http response code", httpResponse.statusCode);
                 console.log("http response body", httpResponse.body);

                 if (err){
                   console.log(err);
                 }
               });
}

function getAccessToken(oauthVerifier, requestToken, cb){
  var oauth = {
    consumer_key: config.consumerKey,
    consumer_secret: config.consumerSecret,
    token: requestToken // in the documentation this says that it should be oauth_token but that does not work, it should just be token like the other requests and then it works.
  };
  console.log("oauth = ", oauth);

  request.post({
    url:'https://api.twitter.com/oauth/access_token',
    oauth: oauth,
    qs: {oauth_verifier: oauthVerifier}
  }, function (e, r, body) {
    console.log("body = ", body);
    if (e){
      console.log(e);
      cb(e);
      return;
    };


    var data = qs.parse(body);
    cb(null, data);
  });

}


function getRequestToken(cb){
  var oauth = {
    callback: 'http://localhost:3000/twitter/callback'
    , consumer_key: config.consumerKey
    , consumer_secret: config.consumerSecret
  };

  request.post({
    url:'https://api.twitter.com/oauth/request_token',
    oauth:oauth
  }, function (e, r, body) {
    if (e){
      console.log(e);
      cb(e);
      return;
    };

    var data = qs.parse(body);
    cb(null, data);
  });

}

//tweet("Hello World", "w_Kw7AAAAAAA3nyGAAABYE4SclU", "acsBdX23gL4GasFjHF8uYFYFX5McnbIO");
