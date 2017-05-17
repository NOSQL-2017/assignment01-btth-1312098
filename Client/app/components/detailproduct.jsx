var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

var detailproduct = React.createClass({
    handleClick: function() {
        var {dispatch, nguoidung, book} = this.props;
        var sach = {
            masach: book.masach,
            url: book.url,
            gioithieu: book.gioithieu,
            tensach: book.tensach,
            nguoimua: nguoidung.tendangnhap,
            sohuu: book.sohuu,
            giatien: book.giatien

        };
        dispatch(actions.themSachVaoGio(sach));

    },
    render: function () {
        var {book} = this.props
        return (
            <div className="column large-4">
                <div className="product-card">
                    <div className="">
                        <img src={book.url} />
                    </div>
                    <h2 className="product-card-title"><a href="#">{book.tensach}</a></h2>
                    <span className="product-card-desc">{book.gioithieu}</span>
                    <span className="product-card-price">{book.giatien} VND</span>
                    <div className="product-card-colors">
                       <button onClick={this.handleClick} className="button-hover-addcart button"><span>Thêm</span><i className="ion-ios-cart-outline"></i></button>
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
)(detailproduct);