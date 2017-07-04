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
			location: {},
			forecast: {},
			history: {}
        	}
	this.updateLocation = this.updateLocation.bind(this);
	this.handleLocationSearch = this.handleLocationSearch.bind(this);
	}
    	
	handleLocationSearch(locationSearch) {
		console.log(locationSearch);
		API.getLocationData((data) => console.log(data));	
	}

	updateLocation(location) {
		this.setState({location: {location}})
	}
    
	render() {
        return  <div className="App .container">
                    <Title />
		    <SearchBar handleSearch={this.handleLocationSearch}/>
		    <ViewWindow location={this.state.location}/>
                </div>
    }
}

export default App;
