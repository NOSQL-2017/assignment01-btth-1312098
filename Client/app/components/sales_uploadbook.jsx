var React = require('react');
var { connect } = require('react-redux')
var actions = require('actions');
var Dropzone = require('react-dropzone');
var sha1 = require('sha1');
var superagent = require('superagent');
var Book = require('sales_book');

var Sales_uploadbook = React.createClass({
    uploadFile: function (files) {
        var { dispatch } = this.props;    
        dispatch(actions.taiAnh(files));
    },
    componentWillReceiveProps: function (nextProps) {
        
    },
    componentWillUnmount: function() {
        var {dispatch} = this.props;
        dispatch(actions.resetDsSachSH());
    },
    render: function () {
        var { dispatch, nguoiban } = this.props;

        var renderBook  = () => {
            if(nguoiban.danhSachAnh.length === 0) {
                return ( <p>Bạn chưa tải lên sách nào.</p>)
            }
            return (
                 nguoiban.danhSachAnh.map((book, k) => {
    
                    return  <Book key={k} url={book['0'].secure_url}/>
                })
            )
        }

        var thongBaoTaiAnh = () => {
             if (nguoiban.xuLyTaiAnh == true) {
                return (
                    <div data-closable className="callout alert-callout-border radius">
                        Đang tải ảnh lên........
                    </div>
                )
            } else if (nguoiban.taiAnh == 1) {
                return (
                    <div data-closable className="callout alert-callout-border success">
                        <strong>Thành công</strong> - Ảnh đã được tải lên.
                        <button className="close-button" aria-label="Dismiss alert" type="button" data-close>
                                <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                )
            }
        }


        return (
            <div className="uploadbook">
                <div className="row">
                    <div className="row">
                         <div className="uploadimages column">
                            <h3>Đăng sách</h3>
                            <Dropzone onDrop={this.uploadFile} className="dropzone">
                                <button className="button radius">Bấm vào đây để tải ảnh sách lên</button>
                            </Dropzone>
                        </div>
                    </div>
                    <div className="row">
                         <div className="message">
                            {thongBaoTaiAnh()}
                         </div>
                    </div>

                    <div className="row">
                        {renderBook()}
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
)(Sales_uploadbook);