var React = require('react');
var { connect } = require('react-redux');
var actions = require('actions');


var productBuyDT = React.createClass({
    handleClick: function() {
        var {dispatch, sach} = this.props;
        dispatch(actions.xoaSachKhoiGio(sach.masach));
    },
    render: function () {
        var {sach, dispatch} = this.props;
        return (
            <div className="column large-5">
                <div className="product-card">
                    <div className="product-card-thumbnail">
                        <a href="#"><img src={sach.url} /></a>
                    </div>
                    <h2 className="product-card-title"><a href="#">{sach.tensach}</a></h2>
                    <span className="product-card-desc">{sach.gioithieu}</span>
                    <span className="product-card-price">{sach.giatien}</span>
                    <div className="product-card-colors">
                        <button className="button" onClick={this.handleClick}>Xóa khỏi giỏ hàng</button>
                    </div>
                </div>
            </div>
        )
    }
})

module.exports = connect(
    state => {
        return state;
    }
)(productBuyDT);