import React from 'react';
import './ForecastDayTab.css';
import {Button} from 'react-bootstrap';
import WeatherIcon from '../../WeatherIcon/WeatherIcon';
import {DateFormat} from '../../../../../util.js';


export default class ForecastDayTab extends React.Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
		this.getButtonHeader = this.getButtonHeader(this);
	}

	getButtonHeader() {
		let date = new Date(this.props.details.time * 1000);
		return <p>{DateFormat.getDayName(date.getDay())} {date.getMonth()+1}-{date.getDate()}</p>
	}	

	handleClick(e) {
		this.props.handleTabClick(this.props.details);	
	}



	render() {
		return 	<Button className="forecast-day-tab col-md-1" onClick={this.handleClick}>
				{this.getButtonHeader} 
				<WeatherIcon className="tab-icon" icon={`wi-forecast-io-${this.props.details.icon}`}/>
				<p className="high">High: {Math.floor(this.props.details.temperatureMax)}</p>
				<p className="low">Low: {Math.floor(this.props.details.temperatureMin)}</p>
			</Button>
	}
}
