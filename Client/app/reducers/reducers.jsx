var uuid = require('node-uuid');
var moment = require('moment');

export var ownerBookReducer = (state ={ListImages: [], isUpload: false}, action) => {
    switch(action.type) {
        case 'START_UPLOAD':
            state.isUpload = true;
            return state;
        case 'COMPLETED_UPLOAD':
            var update = Object.create([], state.ListImages);
            update.push(action.listimages);
            state.ListImages = update;
            state.isUpload = false;
            return state;
        default: 
            return state;
    }
} 