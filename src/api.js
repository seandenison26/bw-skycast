function getLocationData(callback) {
	console.log("called");
	fetch('/api/testLocation')
	.then((res) => res.json())
	.then(callback);
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
