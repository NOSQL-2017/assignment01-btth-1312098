var React = require('react');
var {Link} = require('react-router');

var Sales = React.createClass({

    render: function () {
        return (
            <div className="sales">
                <div className="row">
                    <div className="column large-2">
                        <div className="menu">
                            <div className="vertical-menu">
                                <Link className="active">Chức năng chính</Link>
                                <Link to="/sales">Sách đã đăng</Link>
                                <Link to="/sales/uploadbook">Đăng sách</Link>
                                <Link to="/sales/checkstatebook">Kiếm tra đơn hàng</Link>
                                <Link to="/sales/following">Theo dõi</Link>
                            </div>
                        </div>
                    </div>

                    <div className="column large-10">
                        {this.props.children}
                    </div>
                </div>
                
            </div>
        )
    }
});

module.exports = Sales;