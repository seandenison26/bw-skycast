import React from 'react';
import './GraphDisplay.css';
import LineChart from './LineChart/LineChart';


export default class GraphDisplay extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			chartChoice: "temperature"
		}
		this.updateChartChoice = this.updateChartChoice.bind(this);
	
	}
	
	updateChartChoice(choice) {
		
	}	

		
	

	render() {
		return 	<div className="graph-display col-md-10">
				<LineChart 
					choice={this.state.graphChoice}
					data={this.props.data}
				/>		
				
			</div>	
	}
}
