var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var pg = require('pg');

var db = require('./db');


var pg = require('pg');

var config = {
        user: 'pvDung', //env var: PGUSER
        database: 'BTTH', //env var: PGDATABASE
        password: '123456', //env var: PGPASSWORD
        host: 'db1', // Server hosting the postgres database
        port: 5432, //env var: PGPORT
        max: 10, // max number of clients in the pool
        idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};

var pool = new pg.Pool(config);

pool.connect(function (err, client, done) {
        if (err) {
                return console.error('error fetching client from pool', err);
        }

        client.query('CREATE TABLE IF NOT EXISTS nguoidung(tendangnhap VARCHAR(40) PRIMARY KEY,matkhau VARCHAR(40), tennguoidung VARCHAR(40), email VARCHAR(40), chucvu INT)');
        client.query('CREATE TABLE IF NOT EXISTS danhmucsach(madanhmuc VARCHAR(40) PRIMARY KEY,tendanhmuc VARCHAR(40))');
        client.query('CREATE TABLE IF NOT EXISTS sach(masach serial PRIMARY KEY, url text, tensach VARCHAR(40), giatien float8, gioithieu VARCHAR(350), danhmuc VARCHAR(40), sohuu VARCHAR(40), '+ 
                ' CONSTRAINT sohuu_sach FOREIGN KEY (sohuu) REFERENCES nguoidung(tendangnhap) )');
        client.query('CREATE TABLE IF NOT EXISTS giohang(giohang_id serial PRIMARY KEY, nguoimua VARCHAR(40), diachi VARCHAR(200) , masach INT,sohuu VARCHAR(40), giatien float8, trangthai INT,'
            +   ' CONSTRAINT nguoimua_sach FOREIGN KEY (nguoimua) REFERENCES nguoidung(tendangnhap), '
            +   ' CONSTRAINT sach_dat FOREIGN KEY (masach) REFERENCES sach(masach) )');

        client.query('Select count(tendangnhap) from nguoidung where tendangnhap = $1',['admin'], function(err, result) {          
                if (result.rows[0].count == 0) {
                        client.query('INSERT INTO nguoidung values ($1, $2, $3, $4, $5)',['admin', 'admin','admin', 'admin@gmail',2])
                }
        })


})




app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers','Content-Type');

    next();
});

app.use(require('./controllers'));

app.listen('8080', function() {
    console.log('Sever is running');
});