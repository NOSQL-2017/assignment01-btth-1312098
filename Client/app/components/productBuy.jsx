var React = require('react');


var ProductBuy = React.createClass({

    render: function () {
        return (
            <div className="ProductBuy">
                <div className="row">
                    <div className="column large-9">
                        <h3>Sản phầm đã chọn</h3>
                        <div className="row">
                            <div className="column">
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

                            <div className="column">
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

                            <div className="column">
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
                    <div className="column large-3">
                                <h2>Tổng tiền</h2>
                    </div>
                </div>

               

            </div>


        )
    }
});

module.exports = ProductBuy;