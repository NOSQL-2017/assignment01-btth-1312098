var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory, browserHistory, useRouterHistory} = require('react-router');
var {Provider} = require('react-redux');
var store = require('configureStore').configure();

//Components
var Main = require('main');
var Signup = require('signup');
var Login = require('login');
var Home = require('home');
var ProductBuy = require('ProductBuy');
var Sales = require('sales');
var Sales_checkbook = require('sales_checkbook');
var Sales_checkstatebook = require('sales_checkstatebook');
var Sales_uploadbook = require('sales_uploadbook');
var Admin = require('adminDanhMuc');
var TrangThaiDonHangKH = require('TrangThaiDonHangKH');

require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={Home}/>
               <Route path="/dangky" component={Signup}/>
               <Route path="/dangnhap" component={Login}/>
               <Route path="/giohang" component={ProductBuy}/>
               <Route path="trangthaidh" component={TrangThaiDonHangKH}/>
               <Route path="/sales" component={Sales}>
                    <IndexRoute component={Sales_checkbook}/>
                    <Route path="/sales/checkstatebook" component={Sales_checkstatebook} />
                    <Route path="/sales/uploadbook" component={Sales_uploadbook} />
               </Route>
               <Route path="/admin" component={Admin}/>
            </Route>
        </Router>
    </Provider>
    ,
    document.getElementById("app")
)