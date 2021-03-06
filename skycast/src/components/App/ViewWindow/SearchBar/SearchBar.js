import React from 'react';
import './SearchBar.css';
import {FormControl, Button, DropdownButton, MenuItem} from 'react-bootstrap';
import * as Cookies from "js-cookie";

export default class SearchBar extends React.Component {
	constructor(props) {
		super(props); 
		this.state = {
		value: ""
		}
        	
		this.handleChange = this.handleChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.getSearchHistory = this.getSearchHistory.bind(this);
		
	}
	
	handleChange(event) {
		this.setState({value: event.target.value})
	}

	handleSearch() {
		let array = Cookies.getJSON('search');
		if(array === undefined) {
			Cookies.set('search', [this.state.value])
		}
		else if(!array.includes(this.state.value) && this.state.value !== "")  {
			Cookies.set('search', array.concat(this.state.value).filter(entry => entry === ""? false: true))
		}
		this.props.handleSearch(this.state.value);
	}
    
	getSearchHistory() {
		let searches = Cookies.getJSON('search');
       		if(searches !== undefined) {		
			return searches.map(search => <MenuItem key={search} eventKey={search}>{search}</MenuItem>);
		}
	}

	searchSelect(event) {
		this.setState({value: event});
		this.handleSearch();
	}

	render() {
			return	<div className="search-container">
					<FormControl bsSize="large" type="text" placeholder="Search Location" className="search-bar" onChange={this.handleChange} value={this.state.value}/>
					<DropdownButton bsSize="lg" bsStyle="default" onSelect={evt => this.searchSelect(evt)} title="Search History" id="search-history">
						{this.getSearchHistory()}	
					</DropdownButton>
					<Button bsSize="lg" bsStyle="default" type="submit" className="location-submit" value="Search" onClick={this.handleSearch}>Search!</Button>
				</div>
	}
}

