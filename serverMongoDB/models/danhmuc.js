var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var danhmucSchema = new Schema({
    madanhmuc: {type: String, index: true},
    tendanhmuc: String,
    dsSach: [
        {
            masach: String,
            tensach: String,
            url: String,
            gioithieu: String,
            sohuu: String,
            giatien: Number
        }
    ]
});

module.exports = mongoose.model('DanhMuc', danhmucSchema);