
//creates dependencies
const 
	path = require('path'),
	express = require('express'),
	tasks = require('./tasks'),
	testForecast = require('./testForecast.json');	

//creates router
var router = express.Router();

var rootDir = __dirname + '/../' 

//routes the react app
router.get('/', function(req, res) {
	res.send("API Running")
});

//returns the location JSON from the geocoding API
router.get('/api/location/:location/', function(req, res) {
	let locStr = req.params.location;
	res.send(locStr);
});

//returns the forecast JSON for current day from the darksky API
router.get('/api/forcast/current/:lat/:lng', function(req, res) {
	res.send("API Running")
});

//returns the forecast JSON from a point in time from the darksky API
router.get('/api/forcast/history/:lat/:lng/:time', function(req, res) {
	res.send("API Running")
});


//returns a static forecast json file for dev purposes
router.get('/api/testForecast', function(req, res) {
	res.send(testForecast);
});

//exports the router
module.exports = router;
