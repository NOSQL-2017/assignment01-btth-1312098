var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var pg = require('pg');

var db = require('./db');

db.any('CREATE TABLE IF NOT EXISTS nguoidung(tendangnhap VARCHAR(40) PRIMARY KEY,matkhau VARCHAR(40), tennguoidung VARCHAR(40), email VARCHAR(40), chucvu INT)')
        .then(function(data) {    
        })
        .catch(function(error) {
        });
db.any('CREATE TABLE IF NOT EXISTS danhmucsach(madanhmuc VARCHAR(40) PRIMARY KEY,tendanhmuc VARCHAR(40))')
        .then(function(data) {    
        })
        .catch(function(error) {
        });
db.any('CREATE TABLE IF NOT EXISTS sach(masach serial PRIMARY KEY, url text, tensach VARCHAR(40), giatien float8, gioithieu VARCHAR(350), danhmuc VARCHAR(40), sohuu VARCHAR(40), '+ 
                ' CONSTRAINT sohuu_sach FOREIGN KEY (sohuu) REFERENCES nguoidung(tendangnhap) )')
        .then(function(data) {    
        })
        .catch(function(error) {
        });

db.any('CREATE TABLE IF NOT EXISTS giohang(giohang_id serial PRIMARY KEY, nguoimua VARCHAR(40), diachi VARCHAR(200) , masach INT,sohuu VARCHAR(40), giatien float8, trangthai INT,'
            +   ' CONSTRAINT nguoimua_sach FOREIGN KEY (nguoimua) REFERENCES nguoidung(tendangnhap), '
            +   ' CONSTRAINT sach_dat FOREIGN KEY (masach) REFERENCES sach(masach) )')
        .then(function(data) {    
        })
        .catch(function(error) {
        });
db.any('Select count(tendangnhap) from nguoidung where tendangnhap = $1',['admin']).then(function(data) {
        if (data['0'].count == 0) {
                db.any('INSERT INTO nguoidung values ($1, $2, $3, $4, $5)',['admin', 'admin','admin', 'admin@gmail',2])
        }
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