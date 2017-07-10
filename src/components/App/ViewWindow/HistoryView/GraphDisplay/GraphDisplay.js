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
		console.log(this.state.chartChoice)	
	}	

		
	

	render() {
		return 	<div className="graph-display col-md-8 col-offset-4">
				<ChartNav 
					choice={this.state.choice}
					handleChoice={this.updateChartChoice}	
				/>
				<LineChart 
					choice={this.state.chartChoice}
					data={this.props.data}
				/>		
				
			</div>	
	}
}
