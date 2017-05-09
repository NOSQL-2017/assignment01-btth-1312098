var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
var axios = require('axios');

var HandleState = React.createClass({
    getInitialState: function () {
        return {
            tenSach: '',
            url: '',
            gioithieu: '',
            giatien: '',
            xuly: false
        }
    },
    componentWillMount: function () {
        var { donhang, dispatch } = this.props;
        
        axios.get('http://localhost:8080/api/sach', {
            params: {
                masach: donhang.masach
            }
        }).then( function(res) {
            if (res.data.error == false) {
                this.setState({
                    tenSach: res.data.Sach['0'].tensach,
                    url: res.data.Sach['0'].url,
                    gioithieu: res.data.Sach['0'].gioithieu,
                    giatien: res.data.Sach['0'].giatien
                })
            }
        }.bind(this))
    },
    handleClick: function() {
        var {dispatch, donhang, nguoidung} = this.props;
        axios.post('http://localhost:8082/api/giohang/xuly', {
            id: donhang.giohang_id,
            nguoimua: donhang.nguoimua,
            sohuu: nguoidung.tendangnhap
        }).then( function(res) {
            if (res.data.error == false) {
                this.setState({
                    xuly: true
                })
            }
        }.bind(this))
    },
    render: function() {
        var {donhang, dispatch} = this.props;
        var { tenSach , url, gioithieu, xuly, giatien} = this.state;
        var that = this;
        var hienThiButton = function() {
            if (donhang.trangthai == 0 && xuly == false) {
                return <button className="button" onClick={that.handleClick}>Giao hàng</button>
            } else if (donhang.trangthai == 1 ) {
               return <p className="travel-feature-card-price-subtext"><strong>Đã giao</strong></p>
            } else if (xuly == true) {
                return <p className="travel-feature-card-price-subtext"><strong>Đã giao</strong></p>
            }
        }
        return (
             <div className="handlebook">
                <div className="travel-feature-card">
                    <div className="travel-feature-card-header hotel icon Hotel-icon">
                        <div className="row">
                            <div className="medium-12 columns">
                                <h5 className="travel-feature-card-subtitle">Khách: {donhang.nguoimua}</h5>
                            </div>
                        </div>
                    </div>


                    <div className="travel-feature-card-details">
                        <div className="row">
                            <div className="small-12 medium-9 columns travel-feature-card-content">
                                <div className="row">
                                    <div className="small-4 medium-2 columns">
                                        <img className="travel-feature-card-image" src={url} alt="" />
                                    </div>
                                    <div className="small-8 medium-10 columns">
                                        <h6 className="travel-feature-card-title">{tenSach}</h6>
                                        <p>Địa chỉ giao: {donhang.diachi}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="small-12 medium-3 columns travel-feature-card-price">
                                <h6>{giatien} VND</h6>
                                {hienThiButton()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})

module.exports = connect(
    state => {
        return state;
    }
)(HandleState);