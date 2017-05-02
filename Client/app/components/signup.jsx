var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');


import {browserHistory} from 'react-router';

var Signup = React.createClass({
    getInitialState: function() {
        return {
            checked: false
        }
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var {dispatch} = this.props;
        var chucvu = 0;
        if (this.state.checked == true) {
            chucvu = 1;
        }
        dispatch(actions.dangky(this.refs.tendangnhap.value,this.refs.hoten.value, this.refs.email.value, this.refs.matkhau.value, chucvu))
    },
    handleChange: function() {
        var update = !this.state.checked;
        this.setState({
            checked: update
        })
    },
    componentWillUnmount: function() {
       var {dispatch} = this.props;
       dispatch(actions.reset());
    },
    componentWillReceiveProps: function(nextProps) {
        var {nguoidung} = nextProps;
        if (nguoidung.dangky === 1) {
            browserHistory.push('/');
        } 
    },
    render: function () {
        var {nguoidung} = this.props;
        var {checked} = this.state;

        var thongbao = function() {
            if (nguoidung.laydulieu === 1) {
                return (
                    <div data-closable className="callout alert-callout-border radius">
                        Đang kiểm tra........
                    </div>
                )
            } else if (nguoidung.dangky === 2) {
                return (
                    <div data-closable className="callout alert-callout-border alert radius">
                        <strong>Lỗi</strong> - Tên đăng nhập đã tồn tại.
                    </div>
                )
            }
        }
        return (    
            <div className="signup">
                <div className="row">
                    <div classNameName="column">
                        <h4 className="text-center">Đăng ký tài khoản</h4>
                        <div className="message">
                            {thongbao()}
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-icons">
                                
                                <div className="input-group">
                                    <span className="input-group-label">
                                        <i className="fa fa-user"></i>
                                    </span>
                                    <input className="input-group-field" ref="tendangnhap" type="text" placeholder="Tên đăng nhập" required/>
                                </div>

                                <div className="input-group">
                                    <span className="input-group-label">
                                        <i className="fa fa-user"></i>
                                    </span>
                                    <input className="input-group-field" ref="hoten" type="text" placeholder="Họ và tên" required />
                                </div>

                                <div className="input-group">
                                    <span className="input-group-label">
                                        <i className="fa fa-envelope"></i>
                                    </span>
                                    <input className="input-group-field" ref="email" type="email" placeholder="Email" required/>
                                </div>

                                <div className="input-group">
                                    <span className="input-group-label">
                                        <i className="fa fa-key"></i>
                                    </span>
                                    <input className="input-group-field" ref="matkhau" type="password" placeholder="Mật khẩu" required />
                                </div>
                                <input type="checkbox" ref="chucvu" checked={checked} onChange={this.handleChange} />Đăng ký bán sách<br/>
                               
                            </div>

                            <button className="button expanded">Đăng ký</button>
                        </form>


                    </div>
                </div>
            </div>
        )
    }
});

module.exports = connect(
    (state) => {
        return state;
    }
)(Signup);