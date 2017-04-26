var React = require('react');
var {connect} = require('react-redux');

var Book = React.createClass({
    handleSave: function() {
        var {secure_url, dispatch} = this.props;
        var tensach = this.refs.tensach.value;
        var gia = this.refs.gia.value;
        var gioithieu = this.refs.gioithieu.value;
        console.log(tensach);
        console.log(gia);
        console.log(gioithieu);
        console.log(secure_url);

        dispatch(actions.saveBook(tensach,gia,gioithieu,secure_url))
    },
    render: function() {
        var {secure_url} = this.props;
        console.log(this.props)
        return (
            <div className="column ">
                    <div className="product-card">
                        <div className="product-card-thumbnail">
                            <a href="#"><img  src={secure_url} /></a>
                        </div>
                        <h2 className="product-card-title"><a href="#">Thông tin sách</a></h2>
                        <input ref="tensach" type="text" placeholder="Tên sách"/>
                        <input ref="gia" type="text" placeholder="Giá"/>
                        <textarea ref="gioithieu" id="" cols="30" rows="10"></textarea>
                        <button onClick={this.handleSave} className="button radius">Lưu thông tin</button>
                    </div>
            </div>
        )
    }
});

module.exports = connect()(Book);