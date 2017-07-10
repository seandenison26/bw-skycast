import React from 'react';
import './ChartNav.css';
import {FormControl, FormGroup,ControlLabel} from 'react-bootstrap';

export default class HistoryView extends React.Component {
	constructor(props) {
		super(props)
		
		this.handleChoice = this.handleChoice.bind(this);
	}
	
	handleChoice(choice) {
		this.props.handleChoice(choice)	
	}

	render() {
		return 	<FormGroup className="chart-nav">
				<ControlLabel>Data</ControlLabel>
				
				<FormControl componentClass="select" onChange={evt => this.handleChoice(evt)} placeholder="Display Data">
					<option value="temperature">Temperature</option>		
					<option value="precipIntensity">Precipitation Intensity</option>		
					<option value="dewPoint">Dew Point</option>
					<option value="humidity">Humidity</option>
					<option value="windSpeed">Wind Speed</option>
				</FormControl>			
			</FormGroup>
	}
}

