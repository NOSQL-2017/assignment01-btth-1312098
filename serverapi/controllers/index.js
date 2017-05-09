var express = require('express');
    router = express.Router();

router.use('/api/users', require('./users'));
router.use('/api/giohang', require('./giohang'));
router.use('/api/sach', require('./sach'));

module.exports = router;