import React from 'react';
import './ForecastDayTab.css';
import {Button} from 'react-bootstrap';
import WeatherIcon from '../../WeatherIcon/WeatherIcon';


export default class ForecastDayTab extends React.Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		this.props.handleTabClick(this.props.details);	
	}

	render() {
		return 	<Button className="forecast-day-tab col-md-1" onClick={this.handleClick}>
				<p>{new Date(this.props.details.time * 1000).getDay()}</p>
				<WeatherIcon className="tab-icon" icon={`wi-forecast-io-${this.props.details.icon}`}/>
				<p>High: {Math.floor(this.props.details.temperatureMax)}</p>
				<p>Low: {Math.floor(this.props.details.temperatureMin)}</p>
			</Button>
	}
}
