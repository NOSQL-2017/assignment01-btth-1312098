var React = require('react');


var Login = React.createClass({

    render: function () {

        return (
            <div className="login">
                <div className="row">
                    <div classNameName="column">


                        <form>
                            <div className="form-icons">
                                <h4>Đăng nhập</h4>

                                <div className="input-group">
                                    <span className="input-group-label">
                                        <i className="fa fa-envelope"></i>
                                    </span>
                                    <input className="input-group-field" type="text" placeholder="Email" />
                                </div>

                                <div className="input-group">
                                    <span className="input-group-label">
                                        <i className="fa fa-key"></i>
                                    </span>
                                    <input className="input-group-field" type="text" placeholder="Password" />
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

module.exports = Login;