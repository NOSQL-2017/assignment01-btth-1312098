var express = require('express');
var router = express.Router();
var uuid = require('node-uuid');

var db = require('../db');

router.get('/', function(req, res) {
    var tenDangNhap = req.query.tendangnhap;
    db.any('SELECT tendangnhap, tennguoidung, email  FROM nguoidung where tendangnhap != $1', [tenDangNhap])
        .then(function(data) {
             res.send({message: 'Success', error: false, users: data});
        })
        .catch(function(error) {
            // error;
        });
});

router.get('/chucvu', function(req, res) {
    var tenDangNhap = req.query.tendangnhap;
     db.any('SELECT chucvu from nguoidung where tendangnhap=$1',[tenDangNhap])
        .then(function(data) {
             res.send({message: 'Success', error: false, chucvu: data});
        })
        .catch(function(error) {
            // error;
        });

})

router.post('/signup', function(req, res) {
    db.any('SELECT count(tendangnhap) as number FROM nguoidung WHERE tendangnhap=$1',[req.body.tendangnhap])
        .then(function(data) {
            if (data[0].number == '1')
                res.send({message: 'failed', error: true})
            else if (data[0].number == '0') {
                db.any('INSERT INTO nguoidung(tendangnhap, matkhau, tennguoidung, email, chucvu) values($1, $2, $3, $4, $5)',[req.body.tendangnhap, req.body.matkhau,req.body.hoten, req.body.email,req.body.chucvu])
                    .then(function(data) {
                        res.send({message: 'Success', error: false});
                    })
                    .catch(function(error) {
                        // error;
                    });            
            };
        })
        .catch(function(error) {
            // error;
        });
});
router.get('/data', function(req, res) {
    if (!req.session.user) {
        return res.status(401).send();
    }

    return res.status(200).send("Welcome to super-secret API");
})


router.post('/login', function(req, res) {

     db.any('SELECT count(tendangnhap) as number FROM nguoidung WHERE tendangnhap=$1 and matkhau=$2',[req.body.tendangnhap, req.body.matkhau])
        .then(function(data) {
             if (data[0].number == '1')
                res.send({message: 'Success', error: false})
            else if (data[0].number == '0') {
                res.send({message: 'Failed', error: true});
            }
        })
        .catch(function(error) {
            // error;
        });
    
});
module.exports = router;