var React = require('react');
var Nav = require('nav');
var Home = require('home');
var main = React.createClass({

    render: function() {

        return (
            <div>
                <Nav />
                <div>
                    {this.props.children}
                </div>
            </div>   
        )
    }
});


module.exports = main;