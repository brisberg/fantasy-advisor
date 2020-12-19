#! /usr/bin/node

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});


const fs = require('fs');
const key = fs.readFileSync('./auth/server.key');
const cert = fs.readFileSync('./auth/server.crt');
// const key = fs.readFileSync('./auth/key.pem');
// const cert = fs.readFileSync('./auth/cert.pem');
const https = require('https');


const yahooCreds = require('./yahoo.json');

app.tokenCallback = function({access_token, refresh_token}) {
  return new Promise((resolve, reject) => {
    // client is redis client
    // client.set("accessToken", access_token, (err, res) => {
    //   // could probably handle this with a multi...
    //   // and you know... handle the errors...
    //   // good thing this is only an example!
    //   client.set("accessToken", access_token, (err, res) => {
    //     return resolve();
    //   })
    // })
    console.log(
        `access_token: ${access_token}; refresh_token: ${refresh_token}`);
    return resolve(null);
  });
};

const YahooFantasy = require('yahoo-fantasy');
app.yf = new YahooFantasy(
    yahooCreds.client_key,
    yahooCreds.client_secret,
    app.tokenCallback,
    'https://localhost:3000/auth/yahoo/callback',
);

app.get('/auth/yahoo', (req, res) => {
  app.yf.auth(res);
});

app.get('/auth/yahoo/callback', (req, res) => {
  app.yf.authCallback(req, (err) => {
    if (err) {
      return res.redirect('/error');
    }

    return res.redirect('/');
  });
});

const server = https.createServer({key: key, cert: cert}, app);
server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.yf.game.meta(14747)
    .then(data => {
      // do your thing
      console.log(data);
    })
    .catch(err => {
      // handle error
      console.error(err);
    });

app.yf.league.meta('nba.l.14747')
    .then(data => {
      // do your thing
      console.log(data);
    })
    .catch(err => {
      // handle error
      console.error(err);
    });
