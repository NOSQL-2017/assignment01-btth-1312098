var express = require('express'),
    router = express.Router();

var db = require('../db');

        
    router.get('/', function(req, res) {
        var masach = req.query.masach;

        db.any('SELECT masach, url, tensach, giatien, gioithieu, danhmuc FROM SACH WHERE masach=$1', [masach])
            .then(function(data) {
                res.send({message: 'Success', error: false, Sach: data})
            })
            .catch(function(error) {
                // error;
            });
    })

    router.get('/danhmuc', function(req, res) {
        var danhmuc = req.query.danhmuc;
        console.log('danhmuc', danhmuc);
        if (danhmuc == 0) {
             db.any('SELECT masach,url, tensach, giatien,gioithieu,danhmuc,sohuu FROM SACH')
                .then(function(data) {
                    res.send({message: 'Success', error: false, Sach: data})
                })
                .catch(function(error) {
                });

        } else {
             db.any('SELECT masach,url, tensach, giatien,gioithieu,danhmuc,sohuu FROM SACH WHERE danhmuc=$1', [danhmuc])
                .then(function(data) {
                   res.send({message: 'Success', error: false, Sach: data})
                })
                .catch(function(error) {
                });
           
        }
        
    })

    router.get('/sohuu', function(req, res) {

        var sohuu = req.query.sohuu;

        db.any('SELECT masach,url, tensach, giatien, gioithieu, danhmuc, sohuu FROM SACH WHERE sohuu=$1', [sohuu])
            .then(function(data) {
                res.send({message: 'Success', error: false, Sach: data})
            })
            .catch(function(error) {
                // error;
            });
     
    })


    router.post('/', function(req, res) {
        
          db.any('INSERT INTO sach(masach, url, tensach, giatien, gioithieu, danhmuc , sohuu ) values($1, $2, $3, $4, $5, $6,$7)',[req.body.masach,req.body.url, req.body.tensach,req.body.giatien,req.body.gioithieu, null,req.body.sohuu])
            .then(function(data) {
                //res.send({message: 'Success', error: false});
            })
            .catch(function(error) {
                // error;
            });
        
      
    });


module.exports = router;