var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({secret: "asdfx435feewq324recxv", resave: false, saveUninitialized: true}));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers','Content-Type');

    next();
});

app.use(require('./controllers'));

app.listen('8081', function() {
    console.log('Sever is running');
});