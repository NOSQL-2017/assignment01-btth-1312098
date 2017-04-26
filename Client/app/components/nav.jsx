var React = require('react');
var {Link} = require('react-router');

var nav = React.createClass({

    render: function() {
        
        return (
            <div className="navbar">
                    <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="dropdown menu" data-dropdown-menu>
                        <li className="menu-text">EBOOK</li>
                    
                        <li><Link to="/">Trang chủ</Link></li>
                        <li><Link to="/giohang">Giỏ hàng</Link></li>
                        <li> <Link to="/sales">Bán sách</Link> </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li><input type="search" placeholder="Nhập tên sách" /></li>
                        <li><button type="button" className="button">Tìm</button></li>
                        <li><Link to="/dangnhap">Đăng nhập</Link></li>
                        <li><Link to="/dangky">Đăng ký</Link></li>
                    </ul>
                    
                </div>
            </div>
            </div>
          

        )
    }
});

module.exports = nav;