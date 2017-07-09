import React from 'react';
import './CurrentForecast.css';
import WeatherIcon from '../../WeatherIcon/WeatherIcon';
import {DateFormat} from '../../../../../util.js';

export default class CurrentForecast extends React.Component {
  	/*
     	"time":1498920995,
      "summary":"Partly Cloudy",
      "icon":"partly-cloudy-day",
      "precipIntensity":0.0039,
      "precipProbability":0.02,
      "precipType":"rain",
      "temperature":71.77,
      "apparentTemperature":71.77,
      "dewPoint":57.94,
      "humidity":0.62,
      "windSpeed":11.56,
      "windGust":20.29,
      "windBearing":267,
      "cloudCover":0.34,
      "pressure":1002.96,
      "ozone":322.47,
      "uvIndex":1

	*/
	render() {
		

		return 	<div className="current-forecast">
				<h2><bold>Current Date </bold>: {DateFormat.getDateString(new Date(this.props.currently.time * 1000))}</h2>
				<div className="detail-col">
					<WeatherIcon className="current-icon" icon={`wi-forecast-io-${this.props.currently.icon}`}/>
					<p>Summary: {this.props.currently.summary}</p>
					<p>Temperature: {Math.floor(this.props.currently.temperature)}&deg; F</p>	
					<p>Feels Like: {Math.floor(this.props.currently.apparentTemperature)}&deg; F</p>	
					<p>Chance of Precipitation: {this.props.currently.precipProbability}&#37;</p>
					<p>Precipitation: {this.props.currently.precipIntensity} in.</p>
					<p>Dew Point: {this.props.currently.dewPoint}&deg; F</p>
					<p>Humidity: {Math.floor(this.props.currently.humidity * 100)}&#37;</p>
				</div>
				
				<div className="wind-col">
				<WeatherIcon className="wind-icon" icon={`wi-wind from-${this.props.currently.windBearing}-deg`}/>
					<p>Wind Gust: {this.props.currently.windGust} mph</p>
					<p>Wind Speed: {this.props.currently.windSpeed} mph</p>
				</div>
			</div>
	}
}

