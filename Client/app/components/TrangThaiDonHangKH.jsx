var React = require('react');
var { connect } = require('react-redux');
var actions = require('actions');
var DonHang_DT = require('TrangThaiDonHangKH_DT');
var TrangThaiDonHang = React.createClass({
    componentWillMount: function() {
        var {dispatch, nguoidung} = this.props;
        dispatch(actions.kiemTraTrangThaiSachKH(nguoidung.tendangnhap))
    },
    render: function () {
        var {dathang, dispatch} = this.props;
        var hienThiDsDonHang = () => {
            if (dathang.dsDonDatHangKH.length > 0) {
                return dathang.dsDonDatHangKH.map( (donhang, k) => {
                    return <DonHang_DT key={k} donhang={donhang}/>
                })
            }
            return <h3>Bạn chưa có đặt sách nào.</h3>
        }
        return (
            <div className="trangthaidonhang row columns medium-10">
                {hienThiDsDonHang()}
            </div>
        )
    }
});

module.exports = connect(
    state => {
        return state;
    }
)(TrangThaiDonHang);
