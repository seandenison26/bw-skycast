function getLocationData(location,callback) {
	return new Promise((res,rej) => {
		fetch(`/api/location/${location}`)
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
	getCurrentForecastData,
	getHistoryData
};	
