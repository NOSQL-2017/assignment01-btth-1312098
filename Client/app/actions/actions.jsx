var axios = require('react');
var sha1 = require('sha1');
var superagent = require('superagent')


//---- upload images book to server clouder ---- //

export var startUpload = () => {
    return {
        type: 'START_UPLOAD'
    }
}

export var CompletedUpload = (listimages) => {
    return {
        type: 'COMPLETED_UPLOAD',
        listimages
    }
}

export var saveBook = (tensach,gia,gioithieu,secure_url) => {
    return (dispatch, getState) => {
        
    }
}

