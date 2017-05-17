var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session'); 

var app = express();

const PORT = process.env.PORT || 3000;

app.use(function(req,res, next) {
    if(req.headers['x-forwarded-proto'] === 'https') {
       res.redirect('http://' + req.hostname + req.url);
    } else {
        next();
    }
});
app.use(bodyParser.json());

app.use(cookieParser())

app.use(session({
    resave: true, 
    saveUninitialized: true, 
    secret: "sadfqwer"})
);

app.use(express.static(path.join(__dirname,'./public')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname,'public', 'index.html'))
})



app.listen(PORT, function() {
    console.log('Now server is ' + PORT);
});