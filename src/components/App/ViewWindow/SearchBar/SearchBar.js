import React from 'react';
import './SearchBar.css';
import {FormControl, Forms, FormGroup, Button} from 'react-bootstrap';


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
		return	<FormGroup bsSize="lg" className="location-search">
				<FormControl type="text" placeholder="Search Location" className="search-bar" onChange={this.handleChange} value={this.state.value}/>
				<Button bsSize="lg" bsStyle="default" type="submit" className="location-submit" value="Search" onClick={this.handleSearch}>Search!</Button>
       			</FormGroup>
	}
}

