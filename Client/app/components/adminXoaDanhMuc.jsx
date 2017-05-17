var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

var xoaDanhMuc = React.createClass({
    handleClick: function(e) {
        e.preventDefault();
        var {dm, dispatch} = this.props;
        dispatch(actions.xoaDanhMuc(dm.madanhmuc))
    },
    render: function() {
        var {dm, dispatch} = this.props;
        return (
            <div className="dmcon">
                    <h5>{dm.tendanhmuc} </h5>
                    <button className="button" onClick={this.handleClick}>Xóa</button>
            </div>
        )
    }
});

module.exports = connect(state => {
    return state;
})(xoaDanhMuc);