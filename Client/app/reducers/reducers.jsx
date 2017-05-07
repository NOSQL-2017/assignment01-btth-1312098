var uuid = require('node-uuid');
var moment = require('moment');
var {browserHistory} = require('react-router');

export var ownerBookReducer = (state ={danhSachAnh: [], xuLyLuuAnh: false,xuLyTaiAnh: false, taiAnh: 0, luuAnh: 0, layDSSach: false, dsSachTL: [],dsSachSH: []}, action) => {
    switch(action.type) {
        case 'RESET_OWNER_BOOK': 
            return {
                ...state,
                danhSachAnh: [], xuLyLuuAnh: false,
                xuLyTaiAnh: false, 
                taiAnh: 0, 
                luuAnh: 0, 
                layDSSach: false, 
                dsSachTL: [],
                dsSachSH: []
            }
        case 'XU_LY_LUU_ANH': 
            return {
                ...state,
                xuLyLuuAnh: true
            }
        case 'XU_LY_TAI_ANH':
            return {
                ...state,
                xuLyTaiAnh: true
            }
        case 'TAI_ANH_THANH_CONG':
            return {
                ...state,
                xuLyTaiAnh: false,
                danhSachAnh: [
                    ...state.danhSachAnh,
                    action.Anh
                ],
                taiAnh: 1         
            }
       case 'LUU_ANH_THANH_CONG': 
            return {
                ...state,
                luuAnh: 1,
                xuLyLuuAnh: false
            }
        case 'LUU_ANH_THAT_BAI':
            return {
                ...state,
                luuAnh: 2,
                xuLyLuuAnh: false
            }
        case 'BD_LAY_DS':
            return {
                ...state,
                layDSSach: true
            }
        case 'LAY_DS_SACH_THEO_LOAI_TC':
            return {
                ...state,
                layDSSach: false,
                dsSachTL: action.dsSach
            }
        case 'LAY_DS_SACH_THEO_SH_TC':
            return {
                ...state,
                layDSSach: false,
                dsSachSH: action.dsSach
            }
        default: 
            return state;
    }
} 

export var usersReducer = (state = {session: !!sessionStorage.jwt, isLogin: false,laydulieu: 0, dangky: 0, dangnhap: 0, tendangnhap: '', chucvu: ''},action) => {
    switch(action.type) {
        case  'RESET_FOR_LOGIN': 
            return {
                ...state,
                laydulieu: 0,
                dangnhap: 0,
                dangky: 0
            }
        case 'DAT_MAC_DINH_USER':
            sessionStorage.removeItem('jwt');
            return {
                ...state,
                laydulieu: 0,
                dangnhap: 0,
                dangky: 0,
                isLogin: false
            }
        case 'LAY_DU_LIEU':
            return {
                ...state,
                laydulieu: 1
            }
        case 'DANG_KY_THANH_CONG':

            return {
                ...state,
                laydulieu: 0,
                dangky: 1,
                tendangnhap: action.tendangnhap,
                isLogin: true
            }
        case 'DANG_KY_THAT_BAI':
            return Object.assign({}, state, {
                dangky: 2,
                laydulieu: 0
            })
        case 'DANG_NHAP_THANH_CONG':
            return {
                ...state,
                dangnhap: 1,
                laydulieu: 0,
                tendangnhap: action.tendangnhap,
                isLogin: true
            };
        case 'DANG_NHAP_THAT_BAI':
            return {
                ...state,
                dangnhap: 2,
                laydulieu: 0
        };
        case 'CHUC_VU':
            return {
                ...state,
                chucvu: action.chucvu
            }
        default: 
            return state;
    }
}

export var bookReducer = (state={dsGioHang: [], thanhToan: 0}, action) => {
    switch(action.type) {
        case 'THEM_SACH_VAO_GIO':
            return {
                ...state,
                dsGioHang: [
                    ...state.dsGioHang,
                    action.sach
                ]
            }
        case 'XOA_SACH_KHOI_GIO':
            var updateGioHang = state.dsGioHang.filter((sach) => {
                    return sach.masach !== action.id;
            })
            return {
                ...state,
                dsGioHang: updateGioHang
            }
        case 'BT_THANH_TOAN':
            return {
                ...state,
                thanhToan: 1
            }
        case 'TT_THANH_CONG':
            return {
                ...state,
                dsGioHang: [],
                thanhToan: 2
            }
        default: 
            return state;
    }
}

export var danhMucReducer = (state = {dsDanhMuc: []}, action) => {
    switch(action.type) {
        case 'LAY_DANH_MUC_TC':
            return {
                ...state,
                dsDanhMuc: action.dsDanhMuc
            }
        default: 
            return state;
    }
}

export var dathangReducer = (state = {dsDonDatHangKH: [], dsDonDatHangNB: []}, action) => {
    switch (action.type) {
        case 'RESET_DAT_HANG':
            return {
                ...state,
                dsDonDatHangKH: [], 
                dsDonDatHangNB: []
            }
        case 'DON_DAT_HANG_KH':
            return {
                ...state,
                dsDonDatHangKH: action.dsDaDat
            }
        case 'DS_DON_DAT_HANG':
            return {
                ...state,
                dsDonDatHangNB: action.dsDonDatHang
            }
        default:
            return state;
    }
}