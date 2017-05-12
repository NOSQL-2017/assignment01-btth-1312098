var express = require('express');
    router = express.Router();


router.use('/api/message', require('./message'));

module.exports = router;