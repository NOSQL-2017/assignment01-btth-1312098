var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var cassandra = require('cassandra-driver');


var createKS = "CREATE KEYSPACE IF NOT EXISTS  bookstore WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 3 };";
var useKS = "USE bookstore;"
var createTB = "CREATE TABLE IF NOT EXISTS giohang (giohang_id text ,nguoimua varchar,diachi varchar, masach varchar, trangthai varchar,sohuu varchar, PRIMARY KEY (giohang_id, nguoimua, sohuu) );";

var client = new cassandra.Client({ contactPoints: ['cassandradb'] });
client.connect(function (err, result) {
    if (err) {
        console.log('Something wrong');
    } else
        console.log('Cassandra connected');
    client.execute(createKS, [], function (err, result) {
        if (err) console.log("loi 1", err);
        console.log('1');

        client.execute(useKS, [], function (err, result) {
            if (err) console.log("loi 2", err);
            console.log('2');
            client.execute(createTB, [], function (err, result) {
                if (err) console.log("loi 3", err);
                console.log('3');
                app.use(require('./controllers'));
            })
        })
    })
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: "asdfx435feewq324recxv", resave: false, saveUninitialized: true }));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
});


app.listen('8082', function () {
    console.log('Sever is running');
});