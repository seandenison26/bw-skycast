import React from 'react';
import './ForecastDetail.css';

export default class ForecastDetail extends React.Component {
	constructor(props) {
		super(props);
	}
	
	

	render() {
		return 	<div className="forecast-detail">
				<p>Date: {new Date(this.props.details.time).toString()}</p>
				<p>Summary: {this.props.details.summary}</p>
				<p>ICON: {this.props.details.icon}</p>
				<p>Sunrise: {new Date(this.props.details.sunriseTime).toString()}</p>
				<p>Sunset: {new Date(this.props.details.sunsetTime).toString()}</p>
				<p>Moonphase: {(this.props.details.moonPhase)}</p>
				<p>High: {this.props.details.temperatureMax}</p>			
				<p>Low: {this.props.details.temperatureMin}</p>			
				<p>Dew Point: {this.props.details.dewPoint}</p>			
				<p>Humidity: {this.props.details.humidity}</p>			
				<p>Wind Speed: {this.props.details.windSpeed}</p>			
				<p>Wind Gust: {this.props.details.windGust}</p>			
				<p>Wind Bearing: {this.props.details.windBearing}</p>			
				<p>Cloud Cover: {this.props.details.cloudCover}</p>			
				<p>Pressure: {this.props.details.Pressure}</p>			
				<p>Ozone: {this.props.details.ozone}</p>			
				<p>UV Index: {this.props.details.uvIndex}</p>			
			</div>
	}
}
