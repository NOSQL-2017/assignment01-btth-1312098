var React = require('react');
var actions = require('actions');
var {connect} = require('react-redux');

var Following = React.createClass({
    componentWillMount: function() {
        var {dispatch, nguoidung} = this.props;
        dispatch(actions.layDsTheoDoi(nguoidung.tendangnhap));
    },
    handleUnFollow: function() {
        var {nguoidung, donhang, dispatch} = this.props;
        axios.delete('http://localhost:8083/api/message/unfollow', {
            params: {
               username: nguoidung.tendangnhap,
               otherusername: this.refs.username.value
            }
        }).then(function(res) {
            if(res.data.error == false) {
               dispatch(actions.layDsTheoDoi(nguoidung.tendangnhap));
            }
        })
    },
    render: function() {
        var {message, dispatch, nguoidung} = this.props;
        var that = this;
        var hienThiDsTheoDoi = function() {
            if (message.dsTheoDoi.length > 0) {
                return message.dsTheoDoi.map( (other, k) => {
                    console.log(other);
                    return <i key={k}>{other.properties.username} <button className="button" ref="username" value={other.properties.username} onClick={that.handleUnfollow}>Hủy theo dõi</button></i>
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