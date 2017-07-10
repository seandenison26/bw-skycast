import React from 'react';
import './ForecastDetail.css';
import WeatherIcon from '../../WeatherIcon/WeatherIcon';
import {DateFormat} from '../../../../../util.js';

export default class ForecastDetail extends React.Component {
	constructor(props) {
		super(props);
	}
	
	

	render() {
		return 	<div className="forecast-detail">
					<h2>Date: {DateFormat.getDateString(new Date(this.props.details.time * 1000))}</h2>
				<div className="detail-col">
					<WeatherIcon className="current-icon" icon={`wi-forecast-io-${this.props.details.icon}`}/>
					<p>Summary: {this.props.details.summary}</p>
					<p>Sunrise: {DateFormat.getTimeString(new Date(this.props.details.sunriseTime * 1000))}</p>
					<p>Sunset: {DateFormat.getTimeString(new Date(this.props.details.sunsetTime * 1000))}</p>
					<p>Moonphase: {(this.props.details.moonPhase)}</p>
					<p>High: {Math.floor(this.props.details.temperatureMax)}&deg; F</p>			
					<p>Low: {Math.floor(this.props.details.temperatureMin)}&deg; F</p>			
					<p>Dew Point: {Math.floor(this.props.details.dewPoint)}&deg; F</p>			
					<p>Humidity: {this.props.details.humidity * 100}&#37;</p>			
					<p>Cloud Cover: {this.props.details.cloudCover * 100}&#37;</p>			
					<p>Pressure: {this.props.details.pressure} millibars</p>			
				</div>

				<div className="wind-col">
					<WeatherIcon className="wind-icon" icon={`wi-wind from-${this.props.details.windBearing}-deg`}/>
					<p>Wind Speed: {this.props.details.windSpeed}</p>			
					<p>Wind Gust: {this.props.details.windGust}</p>			
				</div>
			</div>
	}
}
