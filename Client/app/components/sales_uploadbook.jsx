var React = require('react');
var { connect } = require('react-redux')
var actions = require('actions');
var Dropzone = require('react-dropzone');
var sha1 = require('sha1');
var superagent = require('superagent');
var Book = require('sales_book');

var Sales_uploadbook = React.createClass({
    getInitialState: function() {
        return {
            BookImages: []
        }
    },
    uploadFile: function (files) {

        var { dispatch } = this.props;
        
        var images = files;

        var cloudName = 'doancuoiki';
        var url = 'https://api.cloudinary.com/v1_1/' + cloudName + '/image/upload';

        var timestamp = Date.now() / 1000;
        var uploadPreset = 'pvdung';

        var paramsStr = 'timestamp=' + timestamp + '&upload_preset=' +
            uploadPreset + 'e68qaWrrPTkhExBJsAW4ngQrQvw';
        var signature = sha1(paramsStr);

        var params = {
            'api_key': '894259973189773',
            'timestamp': timestamp,
            'upload_preset': uploadPreset,
            'signature': signature
        }

        var ListImages;
        files.forEach(image => {
            var uploadRequest = superagent.post(url);
            uploadRequest.attach('file', image);

            Object.keys(params).forEach((key) => {
                uploadRequest.field(key, params[key])
            });

            uploadRequest.end((err, resp) => {
                if (err) {
                    alert(err, null);
                    return;
                }

                var uploaded = resp.body;

                var updatedImages = Object.assign([], this.state.BookImages);
                updatedImages.push(uploaded);
                this.setState({
                    BookImages: updatedImages
                })
            })
        })

    },
    handleSaveBook: function() {
        var tensach = this.refs.tensach.value;
        var gia = this.refs.gia.value;
        console.log(tensach + ' ' + gia);
    },
    componentWillReceiveProps: function (nextProps) {
        console.log(nextProps);
    },
    render: function () {
        var { dispatch, ownerBook } = this.props;
        var {BookImages} = this.state;
        var renderBook  = () => {
            if(BookImages.length === 0) {
                return ( <p>Nothing to show</p>)
            }
            return (
                 BookImages.map((book, k) => {
                    console.log(book);
                    return  <Book key={k} {...book}/>
                })
            )
        }

        return (
            <div className="uploadbook">
                <div className="row">
                    <div className="uploadimages column">
                        <h3>Upload Images</h3>
                        <Dropzone onDrop={this.uploadFile} className="dropzone">
                            <button className="button radius">Bấm vào đây để tải ảnh sách lên</button>
                        </Dropzone>
                    </div>
                    <div>
                        <button onClick={this.handleSaveBook} className="button radius">Lưu</button>
                    </div>
                    {renderBook()}
                    
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