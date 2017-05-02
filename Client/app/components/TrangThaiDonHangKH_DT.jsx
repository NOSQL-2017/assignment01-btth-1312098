var React = require('react');
var { connect } = require('react-redux');
var actions = require('actions');
var axios = require('axios');

var DonHang_DT = React.createClass({
    getInitialState: function () {
        return {
            tenSach: '',
            url: '',
            gioithieu: ''
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
                    gioithieu: res.data.Sach['0'].gioithieu
                })
            }
        }.bind(this))
    },
    render: function () {

        var { donhang, dispatch } = this.props;
        var { tenSach , url, gioithieu} = this.state;

        return (
            <div>
                <div className="travel-feature-card">
                    <div className="travel-feature-card-header hotel icon Hotel-icon">
                        <div className="row">
                            <div className="medium-12 columns">
                                <h5 className="travel-feature-card-subtitle">Sách</h5>
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
                                        <p>{gioithieu}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="small-12 medium-3 columns travel-feature-card-price">
                                <h6>{donhang.giatien} VND</h6>
                                <p className="travel-feature-card-price-subtext">{donhang.trangthai == 0 ? <strong>Đang xử lý</strong> : <strong>Đã giao</strong>}</p>
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
)(DonHang_DT);