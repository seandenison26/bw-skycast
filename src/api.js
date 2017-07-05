function getLocationData(location) {
	return new Promise((res,rej) => {
		fetch(`/api/location/${location}`)
		.then((res) => res.json())
		.then(res);
	});
}

function getTestLocationData(location) {
	return new Promise((res,rej) => {
		fetch(`/api/testLocation/`)
		.then((res) => res.json())
		.then(res);
	});
}

function getCurrentForecastData() {
	
}

function getHistoryData() {

}

export default {
	getLocationData,
	getTestLocationData,
	getCurrentForecastData,
	getHistoryData
};	
