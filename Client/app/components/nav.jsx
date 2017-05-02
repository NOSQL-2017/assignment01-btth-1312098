var React = require('react');
var {Link} = require('react-router');
var {connect} = require('react-redux');
var actions = require('actions');

var nav = React.createClass({

    render: function() {
        var {nguoidung, dispatch} = this.props;
        console.log('nguoi dung', nguoidung);
        var chucnangDangNhap = function() {
            if (nguoidung.isLogin == true) {
                return (
                  <ul className="menu">  <li onClick={
                    () => { dispatch(actions.reset())}
                  }><Link to="/">Đăng xuất</Link></li> </ul>
                )
            } else {
                return (
                    <ul className="menu">
                        <li><Link to="/dangnhap" className="active">Đăng nhập</Link></li>
                        <li><Link to="/dangky">Đăng ký</Link></li>
                    </ul>
                )
            }
        }
        var chucnangNguoiDung = function() {
            if (nguoidung.isLogin == true && nguoidung.chucvu == 1) {
                return (
                     <ul className="menu">
                        <li><Link to="/sales">Bán sách</Link></li>       
                    </ul>
                )
            } else if (nguoidung.isLogin == true && nguoidung.chucvu == 2) {
                    return (<ul className="menu">
                        <li><Link to="/admin">Quản lý danh mục</Link></li>       
                    </ul>)
            }
        }
        var tenNguoiDung = function() {
            if (nguoidung.isLogin == true) {
                return (    
                    <h5><strong>Chào </strong>{nguoidung.tendangnhap}</h5>    
                )
            }
        }

        var hienThiTrangThai = () => {
            if (nguoidung.isLogin == true) {
               return  <li><Link to="/trangthaidh">Kiểm tra đơn hàng</Link></li>
            }
        }
        return (
            <div className="navbar">
                    <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="dropdown menu" data-dropdown-menu>
                        <li className="menu-text">EBOOK</li>
                    
                        <li><Link to="/">Trang chủ</Link></li>
                        <li><Link to="/giohang">Giỏ hàng</Link></li>
                        {hienThiTrangThai()}
                    </ul>
                </div>
                <div className="top-bar-right">
                    {tenNguoiDung()}
                    {chucnangNguoiDung()}
                    {chucnangDangNhap()}                    
                </div>
            </div>
            </div>
          

        )
    }
});

module.exports = connect(
    state => {
        return state;
    }
)(nav);