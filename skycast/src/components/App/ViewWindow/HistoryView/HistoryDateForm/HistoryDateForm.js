import React from 'react';
import './HistoryDateForm.css';
import {Form, FormControl, Button, ControlLabel, FormGroup} from 'react-bootstrap';

export default class HistoryDateForm extends React.Component {
		constructor(props) {
			super(props)
		this.state = {
			day: this.props.searchDate.getDate(),
			month: this.props.searchDate.getMonth(),
			year:	this.props.searchDate.getFullYear()
		}
		
		this.getMonths = this.getMonths.bind(this);
		this.getDays = this.getDays.bind(this);
		this.getYears = this.getYears.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.onMonthChange=this.onMonthChange.bind(this);
		this.onDayChange=this.onDayChange.bind(this);
		this.onYearChange=this.onYearChange.bind(this);
	}
	
	onMonthChange(e) {
		this.setState( {month: e.target.value});
	}

	onDayChange(e) {
		this.setState( {day: e.target.value});
	}
	onYearChange(e) {
		this.setState( {year: e.target.value});
	}
	
	getMonths() {
		let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		return months.map((month, i) => <option value={i}>{month}</option>);
	}

	getDays() {
		let days = [...Array(31).keys()];
		return days.map(day => <option value={day + 1}>{day + 1}</option>)
	}

	getYears() {
		let years = [...Array(2018-1970).keys()].reverse();
		return years.map(year => <option value={year + 1970}>{year + 1970}</option>)
	}

	handleSearch() {
		let 
			month = this.state.month,
			day = this.state.day,
			year = this.state.year;
		
		this.props.handleSearch(new Date(year, month, day).getTime()/1000);	
	}

	render() {
		return 	<Form inline>
				<FormGroup controlId="historySearch">
					<ControlLabel> Month </ControlLabel>
						<FormControl componentClass="select" value={this.state.month} onChange={this.onMonthChange}>
							{this.getMonths()}	
						</FormControl>
					
					<ControlLabel> Days </ControlLabel>
					<FormControl componentClass="select" value={this.state.day} onChange={this.onDayChange}>
						{this.getDays()}
					</FormControl>
				
					<ControlLabel> Years </ControlLabel>
					<FormControl componentClass="select" value={this.state.year} onChange={this.onYearChange}>
						{this.getYears()}
					</FormControl>
				
					<Button onClick={this.handleSearch}>Search</Button>
				</FormGroup>
			</Form>
	}
}	
