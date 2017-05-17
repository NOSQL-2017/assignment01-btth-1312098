var React = require('react');
var actions = require('actions');
var {connect} = require('react-redux');

var ListFollowing = React.createClass({
    handleUnFollow: function() {
        var {nguoidung, other, dispatch} = this.props;
        
        axios.delete('http://localhost:8083/api/message/unfollow', {
            params: {
               username: nguoidung.tendangnhap,
               otherusername: other.properties.username
            }
        }).then(function(res) {
            if(res.data.error == false) {
                dispatch(actions.layDsTheoDoi(nguoidung.tendangnhap));
            }
        })
    },
    render: function() {
        var {other} = this.props;
        var that = this;
        return (
            <div className="dstheodoi">
                <h4>{other.properties.username}</h4>
                <button className="button" onClick={that.handleUnfollow}>
                    Hủy theo dõi
                </button>
            </div>
        )
    }
})

module.exports = connect( state => {
    return state;
})(ListFollowing);