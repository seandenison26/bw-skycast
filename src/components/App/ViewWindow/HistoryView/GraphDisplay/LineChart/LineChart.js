import React from 'react';
import ReactDOM from 'react-dom';
import './LineChart.css';
import * as d3 from "d3";


export default class LineChart extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {
			width: this.props.width
		}
		this.getData = this.getData.bind(this);	
	}
	
	getData(choice) {
		return this.props.data.map((obj) => {
			return {time: (new Date(obj.time * 1000)), count: obj[choice]}
		}); 
	}

	render() {
		var data = this.getData(this.props.choice);

		//set dimensions
		var margin = {top: 20, right: 20, bottom: 20, left: 20},
            		w = this.state.width - (margin.left + margin.right),
            		h = this.props.height - (margin.top + margin.bottom);
		
		
		var transform='translate(' + margin.left + ',' + margin.top + ')';
		
		//set range
		var x = d3.scaleTime().domain(d3.extent(data, (d) => d.time)).rangeRound([0, w]);

            	
		var y = d3.scaleLinear().domain(d3.extent(data, (d) => d.count)).rangeRound([h, 0]);	

   	
	
				
		var line = d3.line().x(function(d) { return x(d.time);}).y(function(d) { return y(d.count); });


        	           		
		var xAxis = d3.axisBottom(x).tickFormat(function(d){ return d.x;});
		var yAxis = d3.axisLeft(y);
 
		var yGrid = d3.axisLeft(y)
   			.scale(y)
   			.ticks(5)
   			.tickSize(-w, 0, 0)
   			.tickFormat("");
			
		return <div className="chart">
				<svg className="line-chart" width={this.state.width} height={this.props.height}>
    					<g transform={transform}>
       		 			<Grid h={h} grid={yGrid} gridType="y"/>
       		 			<Axis h={h} axis={yAxis} axisType="y" />
        				<Axis h={h} axis={xAxis} axisType="x"/>
	        			<path className="line" d={line(data)} strokeLinecap="round"/>
 		   		</g>
				</svg>	
			</div>
	}
}

LineChart.defaultProps = {
		width: 760,
		height: 450
}

class Axis extends React.Component {
	constructor(props) {
		super(props);
		this.renderAxis = this.renderAxis.bind(this);
	}

	renderAxis() {
		console.log("called");
		var node = ReactDOM.findDOMNode(this);
		d3.select(node).call(this.props.axis);
	}
	
	componentDidUpdate() {
		this.renderAxis()
	}
	
	componentDidMount() {
		console.log("mounted");	
		this.renderAxis()
	}

	render() {
		var translate = "translate(0," +  this.props.h +")";
		return <g className="axis" transform={this.props.axisType=='x'?translate:""}> </g>
	}	 
            
}	


class Grid extends React.Component {
	constructor(props) {
		super(props);
		this.renderGrid = this.renderGrid.bind(this);
	}

	renderGrid() {
		var node = ReactDOM.findDOMNode(this);
		d3.select(node).call(this.props.grid);
	}
	
	componentDidUpdate() {
		this.renderGrid()
	}
	
	componentDidMount() {
		console.log("mounted");
		this.renderGrid()
	}

	render() {
		var translate = `translate(0,${this.props.h})`;
		return <g className="y-grid" transform={this.props.gridType=='x'?translate:""}> </g>
	}	
}

class Dots extends React.Component {

}
