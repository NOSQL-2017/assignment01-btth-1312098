var express = require('express'),
    router = express.Router();

var db = require('../db');

router.get('/nguoimua', function (req, res) {

    db.any('SELECT diachi, masach, giatien, trangthai FROM giohang where nguoimua=$1 ', [req.query.tendangnhap])
        .then(function (data) {
            res.send({ message: 'Success', error: false, dsDaDat: data });
        })
        .catch(function (error) {
            // error;
        });
})

router.get('/nguoiban', function (req, res) {

    db.any('SELECT giohang_id, nguoimua, diachi, masach, giatien, trangthai FROM giohang where sohuu=$1 ', [req.query.tendangnhap])
        .then(function (data) {
            res.send({ message: 'Success', error: false, dsDonDatHang: data });
        })
        .catch(function (error) {
        });
})


router.post('/', function (req, res) {
    var dsSach = req.body.dsSach;
    var diachi = req.body.diachi;
    dsSach.forEach(function (sach) {
        db.any('INSERT INTO giohang(nguoimua, diachi, masach, sohuu, giatien, trangthai ) values($1, $2, $3, $4,$5,$6)', [sach.nguoimua, diachi, sach.masach, sach.sohuu, sach.giatien, 0])
            .then(function (data) {
                res.send({ message: 'Success', error: false });
            })
            .catch(function (error) {

            });
    }, this);
});

router.post('/xuly', function (req, res) {

    db.any('UPDATE giohang set trangthai = $1 where giohang_id = $2', [1, req.body.id])
        .then(function (data) {
            res.send({ message: 'Success', error: false });
        })
        .catch(function (error) {

        });
});



module.exports = router;