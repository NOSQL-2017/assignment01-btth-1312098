var React = require('react');
var actions = require('actions');
var {connect} = require('react-redux')

var Sales_checkbook = React.createClass({

    componentWillMount: function() {
        var {dispatch,nguoidung} = this.props;

        dispatch(actions.layDanhSachSachSH(nguoidung.tendangnhap));
    },
    render: function() {
        var {nguoiban} = this.props;
        var hienThiSach = function() {
            if (nguoiban.dsSachSH.length === 0) {
                return (
                    <div>
                        <h3>Bạn chưa đăng sách nào cả.</h3>
                    </div>
                )
            }
            return nguoiban.dsSachSH['0'].map((sach, k) => {
                return (
                    <div className="column small-3 large-3 details" key={k}>
                        <div className="product-card">
                            <div className="product-card-thumbnail">
                                <a href="#"><img src={sach.url} /></a>
                            </div>
                            <h2 className="product-card-title"><a href="#">{sach.tensach}</a></h2>
                            <span className="product-card-desc">{sach.gioithieu}</span>
                            <span className="product-card-price">{sach.giatien} VND</span>

                        </div>
                    </div>
                )
            })
        }
        return (
            <div className="check-book">
                <div className="row">
                    {hienThiSach()}
                </div>
            </div>
        )
    }
});

module.exports = connect(
    state => {
        return state;
    }
)(Sales_checkbook);