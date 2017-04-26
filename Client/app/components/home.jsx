var React = require('react');
var Product = require('product');
var Menu = require('menu'); 

var home = React.createClass({

    render: function () {
        return (
            <div className="row home">
                <div className="column large-2">
                    <Menu />
                    
                </div>
                 <div className="column large-10">
                    <Product/>
                </div>
            </div>
        )
    }
});

module.exports = home;