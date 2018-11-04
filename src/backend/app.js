var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var MyPets = require('./routes/MyPets');

var app = express();
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/MyPets/api/', MyPets);
const fs = require('fs');
module.exports = app;