var express = require('express');
var app = express();
var session = require('express-session');
var parseurl = require('parseurl');

var FirebaseStore = require('connect-session-firebase')(session);
var firebase = require('firebase-admin');
var config = require('./../turbo.json')
var ref = firebase.initializeApp({
  credential: firebase.credential.cert(config),
  databaseURL: 'https://turbo-iitkms.firebaseio.com/'
});

app.use(session({
    store: new FirebaseStore({
      database: ref.database()
    }),
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 7*24*60*1000
    }
  }));
app.use(function (req, res, next) {
  if (!req.session.status) {
    req.session.status = false
  }
  next()
});

app.listen(8080,function () {
  console.log('listening at port 8080')
});
