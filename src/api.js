function getLocationData(location) {
	return new Promise((res,rej) => {
		fetch(`/api/location/${location}`)
		.then((response) => response.json())
		.then(res);
	});
}

function getTestLocationData(location) {
	return new Promise((res,rej) => {
		fetch(`/api/testLocation`)
		.then((response) => response.json())
		.then(res);
	});
}

function getTestForecastData(coordinates) {
	return new Promise((res,rej) => {
		fetch(`/api/testForecast`)
		.then((response) => response.json())
		.then(res);
	});
}

function getForecastData(coords) {
	return new Promise((res,rej) => {
		fetch(`/api/forecast/current/${coords.lat}/${coords.lng}`)
		.then((response) => response.json())
		.then(res);
	});
	
}

function getHistoryData(coords, time) {
	return new Promise((res,rej) => {
		fetch(`/api/forecast/history/${coords.lat}/${coords.lng}/${time}`)
		.then((response) => response.json())
		.then(res);
	});

}

export default {
	getLocationData,
	getTestLocationData,
	getForecastData,
	getTestForecastData,
	getHistoryData
};	
