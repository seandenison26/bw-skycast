import React from 'react';
import './HistoryDetail.css';
import WeatherIcon from '../../WeatherIcon/WeatherIcon';

export default class HistoryDetail extends React.Component {
	render() {
		return 	<div className="history-detail col-md-2">
				<WeatherIcon className="history-icon" icon={`wi-forecast-io-${this.props.details.icon}`}/>
				<p>Summary: {this.props.details.summary}</p>
				<p>Temperature: {Math.floor(this.props.details.temperature)}&deg; F</p>
				<p>Feels Like: {Math.floor(this.props.details.apparentTemperature)}&deg; F</p>
				<p>Dew Point: {Math.floor(this.props.details.dewPoint)}&deg; F</p>
				<p>Humidity: {Math.floor(this.props.details.humidity * 100)}&#37;</p>
				<p>Cloud Cover: {this.props.details.cloudCover * 100}&#37;</p>			
				<p>Pressure: {this.props.details.pressure} millibars</p>			
				<p>Ozone: {this.props.details.ozone} DU</p>			
			</div>
	}
}
