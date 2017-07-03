
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
router.get('/api/location/:location/', (req, res) => {
	let locStr = req.params.location;
	tasks.getGeoLocation(locStr)
		.then(tasks.getJSON,console.log)
		.then((data) => res.send(JSON.stringify(tasks.formatLocationData(data))),console.log);
});
 
//returns the forecast JSON for current day from the darksky API
router.get('/api/forecast/current/:lat/:lng', function(req, res) {
	let location = {
		lat: req.params.lat,
		lng: req.params.lng
	}
	tasks.getCurrentForecast(location)
		.then(tasks.getJSON,console.log)
		.then((data) => res.send(data),console.log);	
});

//returns the forecast JSON from a point in time from the darksky API
router.get('/api/forecast/history/:lat/:lng/:time', function(req, res) {
	res.send("API Running")
});


//returns a static forecast json file for dev purposes
router.get('/api/testForecast', function(req, res) {
	res.send(testForecast);
});

//exports the router
module.exports = router;
