var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
var ProductBuyDT = require('productBuyDT');

var ProductBuy = React.createClass({
    handleClick: function() {
        var {dispatch,dsSach}  = this.props;
        dispatch(actions.datSach(dsSach.dsGioHang, this.refs.diachi.value));
        this.refs.diachi.value = '';
    },
    render: function () {
        var {dsSach, nguoidung, dispatch} = this.props
        var tongTien = 0;
        var hienThiGioHang = function() {
            if (dsSach.dsGioHang.length > 0) {
                return dsSach.dsGioHang.map( (sach, k) => {
                    tongTien = tongTien + sach.giatien;
                    return <ProductBuyDT key={k} sach={sach} />
                })
            }
            return <div className="column large-5"> Bạn chưa có gì trong giỏ hàng. </div>
        }
        var loadThongBao = () => {
            if (dsSach.thanhToan == 1) {
                return (
                     <div data-closable className="callout alert-callout-border radius">
                        Đang xử lý thanh toán........
                    </div>
                )
            } else {
                if (dsSach.thanhToan == 2) {
                    return (
                         <div data-closable className="callout alert-callout-border success">
                            <strong>Thành công</strong> - Thanh toán thành công.
                        </div>
                    )
                }
            }
        }
        return (
            <div className="ProductBuy">
                <div className="row">
                    <div className="message">
                        {loadThongBao()}
                    </div>
                </div>
                <div className="row">
                    <div className="column large-9">
                        <h3>Sản phầm đã chọn</h3>
                        <div className="row">
                            {hienThiGioHang()}
                        </div>
                    </div>
                    <div className="column large-3">
                            <h2 className="text-center">TỔNG TIỀN</h2>
                            <p className="text-center">{tongTien} VND</p> <br/>
                            <input type="text" ref="diachi" placeholder="Địa chỉ giao đến" required/>
                            <button className="button expanded" onClick={this.handleClick}>Đặt mua</button>
                            
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
)( ProductBuy);