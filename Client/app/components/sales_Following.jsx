var React = require('react');
var actions = require('actions');
var {connect} = require('react-redux');

var Following = React.createClass({
    componentWillMount: function() {
        var {dispatch, nguoidung} = this.props;
        dispatch(actions.layDsTheoDoi(nguoidung.tendangnhap));
    },

    render: function() {
        var {message, dispatch, nguoidung} = this.props;

        var hienThiDsTheoDoi = function() {
            if (message.dsTheoDoi.length > 0) {
                return message.dsTheoDoi.map( (other, k) => {
                    return <i key={k}>{other.username}</i>
                })
            }
            return <p>Bạn chưa theo dõi ai cả...</p>
        }
        return (
            <div>
                <ul>
                    {hienThiDsTheoDoi()}
                </ul>
            </div>
        )
    }
});

module.exports = connect(state => {
    return state;
})(Following);