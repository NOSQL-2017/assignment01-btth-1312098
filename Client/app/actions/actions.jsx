var axios = require('react');
var sha1 = require('sha1');
var superagent = require('superagent')
var axios = require('axios');

//---- upload images book to server clouder ---- //

export var taiAnhThatBai = () => {
    return {
        type: 'TAI_ANH_THAT_BAI'
    }
}

export var taiAnhThanhCong = (Anh) => {
    return {
        type: 'TAI_ANH_THANH_CONG',
        Anh
    }
}

export var xuLyLuuAnh = () => {
    return {
        type: 'XU_LY_LUU_ANH'
    }
}
export var xuLyTaiAnh = () => {
    return {
        type: 'XU_LY_TAI_ANH'
    }
}

export var luuAnhThanhCong = () => {
    return {
        type: 'LUU_ANH_THANH_CONG'
    }
}

export var luuAnhThatBai = () => {
    return {
        type: 'LUU_ANH_THAT_BAI'
    }
}

export var taiAnh = (files) => {
    return (dispatch, getState) => {
        dispatch(xuLyTaiAnh());
        var images = files;

        var cloudName = 'doancuoiki';
        var url = 'https://api.cloudinary.com/v1_1/' + cloudName + '/image/upload';

        var timestamp = Date.now() / 1000;
        var uploadPreset = 'pvdung';

        var paramsStr = 'timestamp=' + timestamp + '&upload_preset=' +
            uploadPreset + 'e68qaWrrPTkhExBJsAW4ngQrQvw';
        var signature = sha1(paramsStr);

        var params = {
            'api_key': '894259973189773',
            'timestamp': timestamp,
            'upload_preset': uploadPreset,
            'signature': signature
        }

        
        files.forEach(image => {
            var uploadRequest = superagent.post(url);
            uploadRequest.attach('file', image);

            Object.keys(params).forEach((key) => {
                uploadRequest.field(key, params[key])
            });

            uploadRequest.end((err, resp) => {
                if (err) {
                    alert(err, null);
                    return;
                }
                var danhSachAnh = [];
                var uploaded = resp.body;
                var capNhapDanhSach = Object.create([], danhSachAnh);
                capNhapDanhSach.push(uploaded);
                danhSachAnh = capNhapDanhSach;
                dispatch(taiAnhThanhCong(danhSachAnh));
            })
        })

    }
}

export var saveBook = (tensach,giatien,gioithieu,url,danhmuc,sohuu) => {
    return (dispatch, getState) => {
        dispatch(xuLyLuuAnh());

        axios.post('http://localhost:8080/api/sach', {
            url,
            tensach,
            gioithieu,
            giatien,
            danhmuc,
            sohuu
        }).then(function (res) {
            if (res.data.error == false) {
                dispatch(luuAnhThanhCong());
            } else {
                console.log('failed');
                dispatch(luuAnhThatBai());
            }
        })
    }
}

export var bdLayDSSach = () => {
    return {
        type: 'BD_LAY_DS'
    }
}

export var LayDanhSachSachTheoLoaiTC = (dsSach) => {
    return {
        type: 'LAY_DS_SACH_THEO_LOAI_TC',
        dsSach
    }
}

export var layDanhSachSachTL = (danhmuc) => {
    return (dispatch, getState) => {
        dispatch(bdLayDSSach());

        axios.get('http://localhost:8080/api/sach/danhmuc', {
           params: {
                danhmuc
           }
        }).then(function (res) {
            if (res.data.error == false) {
                var dsSach = res.data.Sach;
                console.log(dsSach);
                dispatch(LayDanhSachSachTheoLoaiTC(dsSach));
            } else {
                console.log('failed');
               
            }
        })
    }
}


export var LayDanhSachSachTheoSHTC = (dsSach) => {
    return {
        type: 'LAY_DS_SACH_THEO_SH_TC',
        dsSach
    }
}

export var layDanhSachSachSH = (sohuu) => {
    return (dispatch, getState) => {
        dispatch(bdLayDSSach());

        axios.get('http://localhost:8080/api/sach/sohuu', {
           params: {
                sohuu
           }
        }).then(function (res) {
            if (res.data.error == false) {
                var dsSach = res.data.Sach;
                dispatch(LayDanhSachSachTheoSHTC(dsSach));
            } else {
                console.log('failed');
               
            }
        })
    }
}

export var resetDsSachSH = () => {
    return {
        type: 'RESET_DANHSACH_SH'
    }
}

export var xoaSachTaiLen = (url) => {
    return {
        type: 'REMOVE_BOOK_UPLOAD',
        url
    }
}






//---- users ---//
export var reset = () => {
    return {
        type: 'DAT_MAC_DINH'
    }
}
export var laydulieu = () => {
    return {
        type: 'LAY_DU_LIEU'
    }
}

export var dangkythanhcong = (tendangnhap) => {
    return {
        type: 'DANG_KY_THANH_CONG',
        tendangnhap
    }
}

export var dangkythatbai = () => {
    return {
        type: 'DANG_KY_THAT_BAI'
    }
}

export var dangky = (tendangnhap, hoten, email, matkhau, chucvu) => {
    return (dispatch, getState) => {
        dispatch(laydulieu());
        axios.post('http://localhost:8080/api/users/signup', {
            tendangnhap,
            matkhau,
            hoten,
            email,
            chucvu
        }).then(function (res) {
            if (res.data.error == false) { 
                dispatch(dangkythanhcong(tendangnhap));
            } else {
                console.log('failed');
                dispatch(dangkythatbai());
            }
        })
    }
}


export var dangnhapthanhcong = (tendangnhap) => {
    return {
        type: 'DANG_NHAP_THANH_CONG',
        tendangnhap
    }
}

export var dangnhapthatbai = () => {
    return {
        type: 'DANG_NHAP_THAT_BAI'
    }
}

export var dangnhap = (tendangnhap, matkhau) => {
    return (dispatch, getState) => {
        dispatch(laydulieu());

        axios.post('http://localhost:8080/api/users/login', {
            tendangnhap,
            matkhau,
        }).then(function (res) {
            if (res.data.error == false) {
                dispatch(dangnhapthanhcong(tendangnhap));
            } else {
                console.log('failed');
                dispatch(dangnhapthatbai());
            }
        })
    }
}

export var layChucVuTc = (chucvu) => {
    return {
        type: 'CHUC_VU',
        chucvu
    }
}

export var layChucVu = (tendangnhap) => {
    return (dispatch, getState) => {
        
         axios.get('http://localhost:8080/api/users/chucvu', {
            params: {
                tendangnhap
            }
        }).then(function (res) {
            if (res.data.error == false) {
                console.log('actions',res.data.chucvu)
                dispatch(layChucVuTc(res.data.chucvu['0'].chucvu));
            } else {
                console.log('failed');
               
            }
        })
    }
}

// ---- gio hang ---- //

export var themSachVaoGio = (sach) => {
    return {
        type: 'THEM_SACH_VAO_GIO',
        sach
    }
}

export var xoaSachKhoiGio = (id) => {
    return {
        type: 'XOA_SACH_KHOI_GIO',
        id
    }
}

export var batDauThanhToan = () => {
    return {
        type: 'BD_THANH_TOAN'
    }
}

export var thanhToanThanhCong = () => {
    return {
        type: 'TT_THANH_CONG'
    }
}

export var datSach = (dsSach,diachi) => {
    return (dispatch, getState) => {
        dispatch(batDauThanhToan());

        axios.post('http://localhost:8080/api/giohang', {
            dsSach,
            diachi
        }).then(function(res) {
            if (res.data.error == false) {
                dispatch(thanhToanThanhCong());
            }
        })
    }
}


export var layTrangThaiDHKHTC = (dsDaDat) => {
    return {
        type: 'DON_DAT_HANG_KH',
        dsDaDat
    }
}
export var kiemTraTrangThaiSachKH = (tendangnhap) => {
    return (dispatch, getState) => {
        
        axios.get('http://localhost:8080/api/giohang/nguoimua', {
            params: {
                tendangnhap
            }
        }).then( (res) => {
            if (res.data.error == false) {
                dispatch(layTrangThaiDHKHTC(res.data.dsDaDat))
            }
        })
    }
}

export var layDsDonDatHangTC = (dsDonDatHang) => {
    return {
        type: 'DS_DON_DAT_HANG',
        dsDonDatHang
    }
}
export var layDsDonDatHang = (tendangnhap) => {
    return (dispatch, getState) => {
        axios.get('http://localhost:8080/api/giohang/nguoiban',{
            params: {
                tendangnhap
            }
        }).then( res => {
            if (res.data.error == false) {
                dispatch(layDsDonDatHangTC(res.data.dsDonDatHang))
            }
        })
    }
}



// --- danh muc --- //

export var layDanhMucTC = (dsDanhMuc) => {
    return {
        type: 'LAY_DANH_MUC_TC',
        dsDanhMuc
    }
}

export var layDanhMuc = () => {
    return (dispatch, getState) => {

         axios.get('http://localhost:8080/api/danhmuc')
         .then(function(res) {
            if (res.data.error == false) {
                dispatch(layDanhMucTC(res.data.dsDanhMuc));
            }
        })
    }
}

export var xoaDanhMuc = (madanhmuc) => {
    return (dispatch, getState) => {
         axios.delete('http://localhost:8080/api/danhmuc',{
             params: {
                 madanhmuc
             }
         })
         .then(function(res) {
            if (res.data.error == false) {
                dispatch(layDanhMuc());
            }
        })
    }
}

export var themDanhMuc = (madanhmuc,tendanhmuc) => {
    return (dispatch, getState) => {
         axios.post('http://localhost:8080/api/danhmuc',{
                 madanhmuc,
                 tendanhmuc
         })
         .then(function(res) {
            if (res.data.error == false) {
                dispatch(layDanhMuc());
            }
        })
    }
}