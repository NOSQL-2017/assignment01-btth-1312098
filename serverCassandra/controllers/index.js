var express = require('express');
    router = express.Router();

router.use('/api/giohang', require('./giohang'));


module.exports = router;