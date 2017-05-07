var express = require('express');
    router = express.Router();


router.use('/api/sach', require('./sach'));

router.use('/api/danhmuc', require('./danhmuc'));

module.exports = router;