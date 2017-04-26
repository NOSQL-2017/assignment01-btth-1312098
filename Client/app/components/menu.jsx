var React = require('react');

var menu = React.createClass({

    render: function () {
        return (
           <div className="menu">
               <div className="vertical-menu">
                    <a href="#" className="active">Chủ đề sách</a>
                    <a href="#">Khoa Học</a>
                    <a href="#">Tiều thuyết</a>
                    <a href="#">Trinh Thám</a>
                    <a href="#">Ngôn Lù</a>
                </div>
           </div>
        )
    }
});

module.exports = menu;