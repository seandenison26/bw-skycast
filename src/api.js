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

function getForecastData() {
	
}

function getHistoryData() {

}

export default {
	getLocationData,
	getTestLocationData,
	getForecastData,
	getTestForecastData,
	getHistoryData
};	
