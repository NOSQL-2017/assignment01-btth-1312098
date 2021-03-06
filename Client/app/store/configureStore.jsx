var redux = require('redux');
var {dathangReducer, danhMucReducer,ownerBookReducer, usersReducer, bookReducer,messageReducer} = require('reducers');
var thunk = require('redux-thunk').default;

export var configure = () => {
    var reducer = redux.combineReducers({
        nguoiban: ownerBookReducer,
        nguoidung: usersReducer,
        dsSach: bookReducer,
        danhmuc: danhMucReducer,
        dathang: dathangReducer,
        message: messageReducer
    });

    var store = redux.createStore(reducer,redux.applyMiddleware(thunk));

    return store;
}