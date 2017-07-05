import React, { Component } from 'react';
import API from '../../api.js' 
import SearchBar from './SearchBar/SearchBar';
import ViewWindow from './ViewWindow/ViewWindow';
import './App.css';

const Title = () => <h1>SKYCAST</h1>;

class App extends Component {
	constructor() {
		super()
		this.state = {
			locationData: {},
			forecastData: {},
			historyData: {}
        	}
	this.updateLocation = this.updateLocation.bind(this);
	this.handleLocationSearch = this.handleLocationSearch.bind(this);
	}
    	
	handleLocationSearch(locationSearch) {
		API.getLocationData(locationSearch,(data) => console.log(data));	
	}

	updateLocation(location) {
		this.setState({location: {location}})
	}
    
	render() {
        return  <div className="App .container">
                	<Title />
			<SearchBar handleSearch={this.handleLocationSearch}/>
			<ViewWindow 
				locationData={this.state.locationData}
				forecastData={this.state.forecastData}
				historyData={this.state.historyData}
			/>
                </div>
    }
}

export default App;
