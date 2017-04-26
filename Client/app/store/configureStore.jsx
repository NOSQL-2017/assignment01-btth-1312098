var redux = require('redux');
var {ownerBookReducer} = require('reducers');
var thunk = require('redux-thunk').default;

export var configure = () => {
    var reducer = redux.combineReducers({
        ownerBook: ownerBookReducer
    });

    var store = redux.createStore(reducer,redux.applyMiddleware(thunk));

    return store;
}