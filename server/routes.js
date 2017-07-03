
//creates dependencies
var 
	path = require('path');
	express = require('express');
	REST = require('./RESTAPI');

//creates router
var router = express.Router();

var rootDir = __dirname + '/../' 

// routes the react app
router.get('/', function(req, res) {
	res.render('pages/index');
	console.log("Index Sent!")
});

//
router.get('/api/accountLogin/:username/:password', function(req, res) {
});
