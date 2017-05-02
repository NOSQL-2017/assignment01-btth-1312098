var React = require('react');
var actions = require('actions');
var {connect} = require('react-redux');
var HanleStateBook = require('sales_handlestatebook');


var Sales_checkstatebook = React.createClass({
    componentWillMount: function() {
        var {dispatch, nguoidung} = this.props;
        dispatch(actions.layDsDonDatHang(nguoidung.tendangnhap));
    },
    render: function() {
        var {nguoidung, dathang} = this.props;
        var hienThiDonDatHang = function() {
            if (dathang.dsDonDatHangNB.length > 0) {
                return dathang.dsDonDatHangNB.map( (donhang, k) => {
                    return <HanleStateBook key={k} donhang={donhang} />
                })
            }
            return <h3>Bạn chưa có đơn hàng nào cả</h3>
        }
        return (
            <div className="trangthaidonhang row columns medium-10">
                {hienThiDonDatHang()}
            </div>
        )
    }
});

module.exports = connect(state => {
    return state })(Sales_checkstatebook) ;