import React from 'react';
import './LocationBar.css';

export default class LocationBar extends React.Component {
	render() {
		return 	<div className="location-bar">
				<h2>Current Location: {this.props.location.formatted_address}</h2>
			</div>
	}
}
