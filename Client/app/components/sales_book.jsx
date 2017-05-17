var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions')

var Book = React.createClass({
    getInitialState: function() {
        return {
            btnSave: false,
            messageShow: false
        }
    },
    componentWillMount: function() {
        var {dispatch, url, nguoiban} = this.props;
        dispatch(actions.layDanhMuc());
        nguoiban.dsSachSH.forEach(function(e) {
            if (e.url === url) {
                this.setState({
                    btnSave: true
                })
            }
        }.bind(this))
    },
    handleSave: function() {
        var {url, dispatch, nguoidung} = this.props;
        var tensach = this.refs.tensach.value;
        var gia = this.refs.gia.value;
        var danhmuc = this.refs.danhmuc.value;
        var gioithieu = this.refs.gioithieu.value;

        dispatch(actions.saveBook(tensach,gia,gioithieu,url,danhmuc,nguoidung.tendangnhap))
        this.setState({
            btnSave: true,
            messageShow: true
        })

        var that = this;
        setTimeout(function() {

            that.setState({
                messageShow: false
            })
        },4000)
    },

    render: function() {
        var  {url, nguoiban, danhmuc} = this.props;
        var {btnSave, messageShow} = this.state;

        var thongBao = function() {
            if (nguoiban.xuLyLuuAnh == true) {
                return (
                    <div data-closable className="callout alert-callout-border radius">
                        Đang luu thông tin........
                    </div>
                )
            } else if (nguoiban.luuAnh === 1 && messageShow == true) {
                return (
                    <div data-closable className="callout alert-callout-border success">
                        <strong>Thành công</strong> - Thông tin sách đã được lưu.
                    </div>
                )
            }
        }
        var hienThiDanhMuc = function() {
            if (danhmuc.dsDanhMuc.length > 0) {
                return danhmuc.dsDanhMuc.map( (dm, k) => {
                    return (
                         <option key={k} value={dm.madanhmuc}>{dm.tendanhmuc}</option>
                    )
                })
            }
        }
        return (
            <div>
                
                <div className="column large-4">
                    <div className="message">
                        {thongBao()}
                    </div>
                    <div className="product-card ">
                        <div className="product-card-thumbnail">
                            <a href="#"><img  src={url} /></a>
                        </div>
                        <h2 className="product-card-title"><a>Thông tin sách</a></h2>
                        <input ref="tensach" type="text" placeholder="Tên sách"/>
                        <input ref="gia" type="text" placeholder="Giá"/>
                        <select ref="danhmuc" onChange={this.handleOnchange}>
                            {hienThiDanhMuc()}
                        </select>
                        <textarea ref="gioithieu" id="" cols="" rows="" placeholder="Mô tả sách"></textarea>
                        {btnSave === true ? <div/> : <button onClick={this.handleSave} className="button radius">Lưu thông tin</button>}
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
)(Book); 