import React from 'react';
import './SearchBar.css';

export default class SearchBar extends React.Component {
	constructor(props) {
		super(props); 
		this.state = {
		value: ""
		}
        	
		this.handleChange = this.handleChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		}
	
	handleChange(event) {
		this.setState({value: event.target.value})
	}

	handleSearch(event) {
		event.preventDefault();

		this.props.handleSearch(this.state.value);
	}
    
	render() {
	return 	<form className="location-search">
			<input type="text" ref="location-search" placeholder="Search Location" className="search-bar" onChange={this.handleChange} value={this.state.value}/>
			<input type="submit" className="location-submit" value="Search" onClick={this.handleSearch}/>
       		</form>
    }
}

