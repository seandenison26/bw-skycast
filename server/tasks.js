const
	fs = require('fs'),
	HTTPS = require('https');


function getForecast(inputs) {
    
    //lat and lng are the given position from gmaps, time is an optional parameter needed for getting points in the past
    //need to make sure the lat and long are limited to certain amount of digits as the api call will fail if past a certain number
    return new Promise((res,rej) => { 
    const FORECAST_KEY = "2dbd8598f0f907bd6d1e1153b882fc41";
    
    var paths = {
        host: `api.darksky.net`,
        path: `/forecast/${FORECAST_KEY}/${inputs.lat},${inputs.lng}`
    };
    HTTPS.get(paths,res).end();
    });
    
}


//need to establish how the search bar sends the inputs 
//.results[0].geometry.location);
function getGeoLocation(address) {
    return new Promise((res,rej) => {
    const GEOCODE_KEY = "AIzaSyDOzJ8zgdsre9R30U4cLS0F6HqH69kF7tQ";
    var addressStr = address.split(" ").join("+");
    var paths = {
        host: `maps.googleapis.com`,
        path: `/maps/api/geocode/json?address=${addressStr}&key=${GEOCODE_KEY}`
    };
    
    HTTPS.get(paths,res).end();
    
    });
}

//returns a JS object from a JSON HTTPS response
function getJSON(apiCall) {
    return new Promise((res,rej) => { 
	var data = "";
        apiCall.on('data', (chunk) => {
            data += chunk;
        });
        apiCall.on('end', () => {
	res(JSON.parse(data));
        });
    });
}

//Formats location data for the app
function formatLocationData(geocodeData) {
	let locationData = {
		formatted_address: geocodeData.results[0].formatted_address,
		coordinates: geocodeData.results[0].geometry.location,
		place_id: geocodeData.results[0].place_id
	}
	return locationData;
}

module.exports = {
	formatLocationData,
	getForecast,
	getGeoLocation,
	getJSON
}
