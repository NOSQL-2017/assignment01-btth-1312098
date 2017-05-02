var React = require('react');
var { connect } = require('react-redux');
var actions = require('actions');
var AdminXoaDanhMuc = require('adminXoaDanhMuc');

var adminDanhMuc = React.createClass({
    componentWillMount: function() {
        var { dispatch, danhmuc } = this.props;
        dispatch(actions.layDanhMuc());
    },
    handleThem: function (e) {
        e.preventDefault();
        var { dispatch, danhmuc } = this.props;
        var madanhmuc = this.refs.madanhmuc.value;
        var tendanhmuc = this.refs.tendanhmuc.value;
        this.refs.madanhmuc.value = '';
        this.refs.tendanhmuc.value = '';
        dispatch(actions.themDanhMuc(madanhmuc, tendanhmuc));
    },
    render: function () {
        var {dispatch, danhmuc} = this.props;
        var hienThiDanhMuc = function() {
            if (danhmuc.dsDanhMuc.length > 0) {
                return danhmuc.dsDanhMuc.map( (dm, k) => {
                    return <AdminXoaDanhMuc dm={dm} key={k} />
                })
            }
            return <div><h3>Chưa có danh mục nào cả.</h3></div>
        }
        return (
            <div className="admin">
                <div className="row">
                    <div className="column large-6">
                        <form onSubmit={this.handleThem} className="danhmuc-form">
                            <h4 className="text-center">Thêm danh mục</h4>
                            <label>Mã danh mục
                        <input type="text" ref="madanhmuc" placeholder="KH" />
                            </label>
                            <label>Tên danh mục
                        <input type="text" ref="tendanhmuc" placeholder="Khoa học" />
                            </label>
                            <p><input type="submit" className="button expanded" value="Thêm danh mục"></input></p>
                        </form>
                    </div>
                    <div className="column large-6">
                        <h4 className="text-center">Danh mục hiện có</h4>
                        {hienThiDanhMuc()}
                    </div>
                </div>
            </div>
            

        )
    }
})

module.exports = connect(state => {
    return state;
})(adminDanhMuc);