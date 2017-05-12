var express = require('express'),
    router = express.Router();


var cassandra = require('cassandra-driver');
var uuid = require('node-uuid');

var client = new cassandra.Client({contactPoints : ['cassandradb']});
client.connect(function(err, result) {
    if (err) {
      console.log('Something wrong');
    } else 
      console.log('Cassandra connected: gio hang');
})

var getdsSach_1 = 'SELECT diachi, masach, trangthai FROM bookstore.giohang WHERE nguoimua=? ALLOW FILTERING'
router.get('/nguoimua', function (req, res) {

    client.execute(getdsSach_1,[req.query.tendangnhap], function(err, result) {
        if (err) console.log(err);
        else res.send({ message: 'Success', error: false, dsDaDat: result.rows });
    })
  
})

var getdsSach_2 = 'SELECT giohang_id, nguoimua, diachi, masach, trangthai FROM bookstore.giohang WHERE sohuu=? ALLOW FILTERING'
router.get('/nguoiban', function (req, res) {

    client.execute(getdsSach_2,[req.query.tendangnhap], function(err, result) {
        if (err) console.log(err);
        else res.send({ message: 'Success', error: false, dsDonDatHang: result.rows });
    })
})


var upsertGioHang = 'INSERT INTO bookstore.giohang(giohang_id,nguoimua,sohuu,diachi,masach,trangthai) values (?, ?, ?,?,?,?)'
router.post('/', function (req, res) {
    var dsSach = req.body.dsSach;
    var diachi = req.body.diachi;
    dsSach.forEach(function (sach) {
        var id = uuid();
        var id_2 = id.split('-');
        var id_3 = '';
        for (var i = 0; i < id_2.length; i++) {
            id_3 = id_2[i] + id_3;
        }
        var trangthai = '0';

        client.execute(upsertGioHang,[id_3,sach.nguoimua, sach.sohuu,diachi,sach.masach,trangthai ], function(err, result) {
            if(err) {
                console.log(err);
                res.status(404).send({message: err});
            } else {
                res.send({ message: 'Success', error: false });
            }
        })

    }, this);
});

var updateTrangThai = 'UPDATE bookstore.giohang set trangthai = ? where giohang_id = ? and nguoimua = ? and sohuu = ?'
router.post('/xuly', function (req, res) {

    var trangthai = '1';
    client.execute(updateTrangThai,[trangthai, req.body.id,req.body.nguoimua, req.body.sohuu], function(err, result) {
        if (err) console.log(err);
        else res.send({ message: 'Success', error: false });
    })
});



module.exports = router;