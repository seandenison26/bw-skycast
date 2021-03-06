import React, { Component } from 'react';
import API from '../../api.js' 
import ViewWindow from './ViewWindow/ViewWindow';
import './App.css';


class App extends Component {
	constructor() {
		super()
		this.state = {
			locationData: {},
			forecastData: {},
			historyData: {}
        	}
	this.updateLocation = this.updateLocation.bind(this);
	this.updateForecast = this.updateForecast.bind(this);
	this.updateHistory = this.updateHistory.bind(this);
	this.handleLocationSearch = this.handleLocationSearch.bind(this);
	this.handleHistorySearch = this.handleHistorySearch.bind(this);
	}
    	
	
	updateLocation(location) {
		this.setState({locationData: location})
	}
    
	updateForecast(forecast) {
		this.setState({forecastData: forecast})
	}
	
	updateHistory(history) {
		this.setState({historyData: history})
	}
	
	handleLocationSearch(locationSearch) {
		API.getLocationData(locationSearch)
		.then(this.updateLocation)
		.catch((rej) => console.log(rej));
	}

	handleHistorySearch(date) {
		API.getHistoryData(this.state.locationData.coordinates,date)
		.then(this.updateHistory)
		.catch((rej) => console.log(rej));	
	}
	
	componentDidUpdate(prevProps,prevState) {
		if(this.state.locationData !== prevState.locationData) {
			API.getForecastData(this.state.locationData.coordinates)
			.then(this.updateForecast)
			.catch((rej) => console.log(rej));
		}
		
		if(this.state.locationData !== prevState.locationData) {
			API.getHistoryData(this.state.locationData.coordinates,Math.floor(new Date().getTime()/1000))
			.then(this.updateHistory)
			.catch((rej) => console.log(rej));
		}
	}

	render() {
        return  <div className="App .container">
			<ViewWindow 
				locationData={this.state.locationData}
				forecastData={this.state.forecastData}
				historyData={this.state.historyData}
				handleLocationSearch={this.handleLocationSearch}
				handleHistorySearch={this.handleHistorySearch}
			/>
                </div>
    }
}

export default App;
