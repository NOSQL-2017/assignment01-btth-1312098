var React = require('react');


var Product = React.createClass({

    render: function () {
        return (
            <div className="Product">
                <div className="row">
                    <div className="column small-3 large-3 details">
                        <div className="product-card">
                            <div className="product-card-thumbnail">
                                <a href="#"><img src="http://placehold.it/180x180" /></a>
                            </div>
                            <h2 className="product-card-title"><a href="#">Product Name</a></h2>
                            <span className="product-card-desc">Product Description</span>
                            <span className="product-card-price">$9.99</span><span className="product-card-sale">$12.99</span>
                            <div className="product-card-colors">
                                <button href="#" className="product-card-color-option"><img src="http://placehold.it/30x30" /></button>
                                <button href="#" className="product-card-color-option"><img src="http://placehold.it/30x30" /></button>
                                <button href="#" className="product-card-color-option"><img src="http://placehold.it/30x30" /></button>
                                <button href="#" className="product-card-color-option"><img src="http://placehold.it/30x30" /></button>
                            </div>
                        </div>
                    </div>

                     <div className="column small-3 large-3 details">
                        <div className="product-card">
                            <div className="product-card-thumbnail">
                                <a href="#"><img src="http://placehold.it/180x180" /></a>
                            </div>
                            <h2 className="product-card-title"><a href="#">Product Name</a></h2>
                            <span className="product-card-desc">Product Description</span>
                            <span className="product-card-price">$9.99</span><span className="product-card-sale">$12.99</span>
                            <div className="product-card-colors">
                                <button href="#" className="product-card-color-option"><img src="http://placehold.it/30x30" /></button>
                                <button href="#" className="product-card-color-option"><img src="http://placehold.it/30x30" /></button>
                                <button href="#" className="product-card-color-option"><img src="http://placehold.it/30x30" /></button>
                                <button href="#" className="product-card-color-option"><img src="http://placehold.it/30x30" /></button>
                            </div>
                        </div>
                    </div>

                     <div className="column small-3 large-3 details">
                        <div className="product-card">
                            <div className="product-card-thumbnail">
                                <a href="#"><img src="http://placehold.it/180x180" /></a>
                            </div>
                            <h2 className="product-card-title"><a href="#">Product Name</a></h2>
                            <span className="product-card-desc">Product Description</span>
                            <span className="product-card-price">$9.99</span><span className="product-card-sale">$12.99</span>
                            <div className="product-card-colors">
                                <button href="#" className="product-card-color-option"><img src="http://placehold.it/30x30" /></button>
                                <button href="#" className="product-card-color-option"><img src="http://placehold.it/30x30" /></button>
                                <button href="#" className="product-card-color-option"><img src="http://placehold.it/30x30" /></button>
                                <button href="#" className="product-card-color-option"><img src="http://placehold.it/30x30" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
});

module.exports = Product;