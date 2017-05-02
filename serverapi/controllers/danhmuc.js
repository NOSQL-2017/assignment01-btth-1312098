var express = require('express'),
    router = express.Router();

var db = require('../db');

router.get('/', function(req, res) {

    db.any('SELECT madanhmuc, tendanhmuc FROM danhmucsach')
        .then(function(data) {
            res.send({message: 'Success', error: false, dsDanhMuc: data});
        })
        .catch(function(error) {
            // error;
        });
})

router.delete('/', function(req, res) {
    var madanhmuc = req.query.madanhmuc;


     db.any('DELETE FROM danhmucsach where madanhmuc=$1 ', [madanhmuc])
        .then(function(data) {
            res.send({message: 'Success', error: false});
        })
        .catch(function(error) {
            // error;
        });
        
})


router.post('/', function(req, res) {
    var madanhmuc = req.body.madanhmuc;
    var tendanhmuc = req.body.tendanhmuc;

     db.any('INSERT INTO danhmucsach(madanhmuc, tendanhmuc) values($1, $2)',[madanhmuc,tendanhmuc])
        .then(function(data) {
            res.send({message: 'Success', error: false});
        })
        .catch(function(error) {
            // error;
        });
});


module.exports = router;