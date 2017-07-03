var express = require('express');
var router = require('./routes');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended:false}));

//parse application/json
app.use(bodyParser.json());

//sets the the router
app.use('/',router);


//sets port for app to listen on
app.listen(3001); 
