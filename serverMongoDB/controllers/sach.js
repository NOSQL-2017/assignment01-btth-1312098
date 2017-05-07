var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var uuid = require('node-uuid');
var danhMuc = require('../models/danhmuc');


var uriString =  'mongodb://mgdb:27017';
mongoose.connect(uriString, function(err) {
    if (err) {
        console.log("error", err);
    }
        
    router.get('/', function(req, res) {
        var masach = req.query.masach;

        db.any('SELECT masach, url, tensach, giatien, gioithieu, danhmuc FROM SACH WHERE masach=$1', [masach])
            .then(function(data) {
                res.send({message: 'Success', error: false, Sach: data})
            })
            .catch(function(error) {

            });
    })

    router.get('/danhmuc', function(req, res) {
        var danhmuc = req.query.danhmuc;
        console.log('danhmuc', danhmuc);
        if (danhmuc == 0) {
            danhMuc.find({}, function(err, Sach) {
            if (err) {
                console.log(Sach);
                res.send({message: 'Failed', error: true});
            } else {
                res.send({message: 'Success', error: false, Sach: Sach});
            }
        })
        } else {
            danhMuc.find({ "madanhmuc": danhmuc}, function(err, Sach) {
            if (err) {
                console.log(Sach);
                res.send({message: 'Failed', error: true});
            } else {
                res.send({message: 'Success', error: false, Sach: Sach});
            }
        })
        }
        
    })

    router.get('/sohuu', function(req, res) {

        var sohuu = req.query.sohuu;


        danhMuc.find({ "dsSach.sohuu": sohuu}, function(err, Sach) {
            if (err) {
                res.send({message: 'Failed', error: true});
            } else {
                res.send({message: 'Success', error: false, Sach: Sach});
            }
        })
    })


    router.post('/', function(req, res) {
        

        danhMuc.findOneAndUpdate(
            {madanhmuc: req.body.danhmuc},
            {$push: {"dsSach": {
                masach: req.body.masach,
                tensach: req.body.tensach,
                url: req.body.url,
                gioithieu: req.body.gioithieu,
                sohuu: req.body.sohuu,
                giatien: req.body.giatien
            }}},
            {safe: true, upsert: true, new : true},
            function(err, model) {
                if (err) {
                    res.send({message: 'Failed', error: true});
                } else {
                    res.send({message: 'Success', error: false});
                }
            }
            
        )
    });
});


module.exports = router;