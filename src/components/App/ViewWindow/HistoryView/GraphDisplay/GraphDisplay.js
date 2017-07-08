import React from 'react';
import './GraphDisplay.css';
import ChartNav from './ChartNav/ChartNav';
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
		this.setState({ chartChoice: choice});	
	}	

		
	

	render() {
		return 	<div className="graph-display">
				<ChartNav 
					className="col-md-2"
					handleChoice={this.updateChartChoice}	
				/>
				<LineChart 
					className="col-md-8"	
					choice={this.state.chartChoice}
					data={this.props.data}
				/>		
				
			</div>	
	}
}
