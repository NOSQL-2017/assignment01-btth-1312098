var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

var danhmuc = React.createClass({
    handleClick: function(e) {
        e.preventDefault();
        var {dispatch,danhmuccon} = this.props;
        dispatch(actions.layDanhSachSachTL(danhmuccon.madanhmuc));
    },
    handleClickAll: function(e) {
        e.preventDefault()
        dispatch(actions.layDanhSachSachTL(0));
    },
    render: function() {
        var {dispatch, danhmuccon} = this.props;
        return (
            <div>
                <a href="" onClick={this.handleClickAll}>Tất cả</a>
                <a href="" onClick={this.handleClick}>{danhmuccon.tendanhmuc}</a>
            </div>
        )
    }
});

module.exports = connect(state => {
    return state;
})(danhmuc);