var React = require('react');
var actions = require('actions');
var {connect} = require('react-redux');
import {browserHistory} from 'react-router';

var Login = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        var {dispatch} = this.props;
        dispatch(actions.dangnhap(this.refs.tendangnhap.value, this.refs.matkhau.value))
    },
    componentWillUnmount: function() {
       var {dispatch} = this.props;
       dispatch(actions.reset());
    },
    componentWillReceiveProps: function(nextProps) {
        var {nguoidung} = nextProps;
        if (nguoidung.dangnhap === 1) {
            browserHistory.push('/');
        } 
    },
    render: function () {
        var {nguoidung} = this.props;

        var thongbao = function() {
            if (nguoidung.laydulieu === 1) {
                return (
                    <div data-closable className="callout alert-callout-border radius">
                        Đang kiểm tra........
                    </div>
                )
            } else if (nguoidung.dangnhap === 2) {
                return (
                    <div data-closable className="callout alert-callout-border alert radius">
                        <strong>Lỗi</strong> - Tên đăng nhập hoặc mật khẩu sai.
                    </div>
                )
            }
        }

        return (
            <div className="login">
                <div className="row">
                    <div classNameName="column">
                        <h4 className="text-center">Đăng nhập</h4>
                        <div className="message">
                            {thongbao()}
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-icons">
                                <div className="input-group">
                                    <span className="input-group-label">
                                        <i className="ion-ios-person-outline"></i>
                                    </span>
                                    <input className="input-group-field" ref="tendangnhap" type="text" placeholder="Tên đăng nhập"  required/>
                                </div>

                                <div className="input-group">
                                    <span className="input-group-label">
                                        <i className="ion-key"></i>
                                    </span>
                                    <input className="input-group-field" ref="matkhau" type="password" placeholder="Password" required/>
                                </div>
                            </div>

                            <button className="button expanded">Đăng nhập</button>
                        </form>


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
)(Login);