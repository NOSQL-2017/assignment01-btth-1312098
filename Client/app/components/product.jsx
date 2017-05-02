var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
var DetailProduct = require('detailproduct');

var Product = React.createClass({
    componentWillMount: function() {
         var {dispatch, nguoiban} = this.props;
         if (nguoiban.dsSachTL.length == 0) {
            dispatch(actions.layDanhSachSachTL(0));
         }
    },
    render: function () {
         var {dispatch, nguoiban} = this.props;

        var hienThiSach = function() {
            if (nguoiban.dsSachTL.length > 0) {
                if (nguoiban.dsSachTL['0'].length > 0) {
                     return nguoiban.dsSachTL['0'].map( (book, k) => {
                        return <DetailProduct key={k} book={book} />
                    })
                }
                
            }
            return <div className="column small-3 large-3"><h2>Chưa có sách nào được đăng bán cả.</h2></div>
           
        }
        return (
            <div className="Product">
                <div className="row">
                   {hienThiSach()}
                </div>
            </div>


        )
    }
});

module.exports = connect(
    state => {
        return state;
    }
)(Product);