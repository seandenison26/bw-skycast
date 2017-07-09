import React from 'react';
import './WeatherIcon.css';
import './css/weather-icons.min.css'
import './font/weathericons-regular-webfont.eot'
import './font/weathericons-regular-webfont.svg'
import './font/weathericons-regular-webfont.ttf'
import './font/weathericons-regular-webfont.woff'
import './font/weathericons-regular-webfont.woff2'

export default class WeatherIcon extends React.Component {
	render() {
		return <i className={"wi " + this.props.icon}></i>
	}
}
