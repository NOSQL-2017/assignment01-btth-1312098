var React = require('react');
var {Link} = require('react-router');
var {connect} = require('react-redux');
var actions = require('actions');
var DanhMuc = require('danhmuc');

var menu = React.createClass({
    componentWillMount: function() {
        var { dispatch, danhmuc } = this.props;
        dispatch(actions.layDanhMuc());
    },
    render: function () {
        var {danhmuc, dispatch} = this.props;
        var hienThiDanhMuc = function() {
            if (danhmuc.dsDanhMuc.length > 0) {
                return danhmuc.dsDanhMuc.map( (danhmuccon, k) => {
                    return <DanhMuc key={k} danhmuccon={danhmuccon} />
                })
            }
        }
        return (
           <div className="menu">
               <div className="vertical-menu">
                    <Link  className="active">Chủ đề sách</Link>
                    {hienThiDanhMuc()}
                </div>
           </div>
        )
    }
});

module.exports = connect(
    state => {
        return state;
    }
)(menu);