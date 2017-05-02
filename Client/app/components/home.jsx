var React = require('react');
var Product = require('product');
var Menu = require('menu'); 
var {connect} = require('react-redux');
var actions = require('actions');

import Detailproduct from './detailproduct';


var home = React.createClass({
    componentWillMount: function() {
        var {dispatch, nguoidung} = this.props;
        console.log('home', nguoidung);
        if (nguoidung.isLogin == true) {
            dispatch(actions.layChucVu(nguoidung.tendangnhap));
        }
        
    },
    componentWillReceiveProps: function(nextProps) {
        
    },
    render: function () {
        return (
            <div className="row home">
                <div className="column large-2">
                    <Menu />                  
                </div>
                 <div className="column large-10">
                    <Product />
                </div>
            </div>
        )
    }
});

module.exports = connect(
    state => {
        return state;
    }
)(home);

