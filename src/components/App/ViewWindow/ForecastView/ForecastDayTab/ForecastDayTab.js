import React from 'react';
import './ForecastDayTab.css';

export default class ForecastDayTab extends React.Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		this.props.handleTabClick(this.props.details);	
	}

	render() {
		return 	<button className="forecast-day-tab col-md-1" onClick={this.handleClick}>
				<p>{new Date(this.props.details.time).getDay()}</p>
				<p>{this.props.details.icon}</p>
				<p>{this.props.details.temperatureMax}</p>
				<p>{this.props.details.temperatureMin}</p>
			</button>
	}
}
