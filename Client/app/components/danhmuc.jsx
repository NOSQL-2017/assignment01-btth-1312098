var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

var danhmuc = React.createClass({
    handleClick: function(e) {
        e.preventDefault();
        var {dispatch,danhmuccon} = this.props;
        dispatch(actions.layDanhSachSachTL(danhmuccon.madanhmuc));
    },
    render: function() {
        var {dispatch, danhmuccon} = this.props;
        return (
            <a href="" onClick={this.handleClick}>{danhmuccon.tendanhmuc}</a>
        )
    }
});

module.exports = connect(state => {
    return state;
})(danhmuc);