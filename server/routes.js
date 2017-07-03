
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

//returns formatted location JSON 
router.get('/api/location/:location/', (req, res) => {
	let locStr = req.params.location;
	tasks.getGeoLocation(locStr)
		.then(tasks.getJSON,console.log)
		.then((data) => res.send(JSON.stringify(tasks.formatLocationData(data))),console.log);
});
 
//returns the forecast JSON for the current time
router.get('/api/forecast/current/:lat/:lng', function(req, res) {
	let location = {
		lat: req.params.lat,
		lng: req.params.lng
	}
	tasks.getCurrentForecast(location)
		.then(tasks.getJSON,console.log)
		.then((data) => res.send(data),console.log);	
});

//returns the forecast JSON from a point in time 
router.get('/api/forecast/history/:lat/:lng/:time', function(req, res) {
	let location = {
		lat: req.params.lat,
		lng: req.params.lng,
		time: req.params.time
	}
	tasks.getHistoryForecast(location)
		.then(tasks.getJSON,console.log)
		.then((data) => res.send(data),console.log);	
});

//returns a static forecast json file for dev purposes
router.get('/api/testLocation', function(req, res) {
	let testLocation = {
		"formatted_address":"5700 N Natoma Ave, Chicago, IL 60631, USA",
		"coordinates":{"lat":41.98522699999999,"lng":-87.79414299999999},
		"place_id":"ChIJc60OqF3JD4gR9LgP8Wnx7VU"	
	}
	res.send(testLocation);
});

//returns a static forecast json file for dev purposes
router.get('/api/testForecast', function(req, res) {
	res.send(testForecast);
});

//exports the router
module.exports = router;
