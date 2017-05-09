var express = require('express');
var router = express.Router();
var uuid = require('node-uuid');
var mongoose = require('mongoose');
var danhMuc = require('../models/danhmuc');

var uriString =  'mongodb://mgdb:27017';


mongoose.connect(uriString, function(err) {
    // if (err) {
    //     console.log("error", err);
    // }
});


    router.get('/', function(req, res) {

        danhMuc.find({}, function(err, dsDanhMuc) {
            if (err) {
                res.send({message: 'Failed', error: true});
            } else {
                res.send({message: 'Success', error: false, dsDanhMuc: dsDanhMuc});
            }
        })
    })

    router.delete('/', function(req, res) {
        var madanhmuc = req.query.madanhmuc;

        danhMuc.findOneAndRemove({madanhmuc: madanhmuc}, function(err) {
            if (err) {
                res.send({message: 'Failed', error: true});
            } else {
                res.send({message: 'Success', error: false});
            }
            
        })
            
    })


    router.post('/', function(req, res) {
        var madanhmuc = req.body.madanhmuc;
        var tendanhmuc = req.body.tendanhmuc;
        var dm = new danhMuc({
            madanhmuc: madanhmuc,
            tendanhmuc: tendanhmuc
        });

        danhMuc.create(dm, function(err, newDanhMuc) {
            if (err) {
                console.log("them danh muc khong thanh cong");
            } else {
                res.send({message: 'Success', error: false});
            }
        })
    });


module.exports = router;