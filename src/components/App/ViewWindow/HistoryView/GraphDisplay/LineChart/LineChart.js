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
	
	getData() {

	}

	render() {
		var data=[
        	  	{day:'02-11-2016',count:180},
          	  	{day:'02-12-2016',count:250},
        	    	{day:'02-13-2016',count:150},
            		{day:'02-14-2016',count:496},
          	  	{day:'02-15-2016',count:140},
          	  	{day:'02-16-2016',count:380},
          	  	{day:'02-17-2016',count:100},
          	  	{day:'02-18-2016',count:150}
       		];		
		
		var margin = {top: 5, right: 50, bottom: 20, left: 50},
            		w = this.state.width - (margin.left + margin.right),
            		h = this.props.height - (margin.top + margin.bottom);
		
		var parseDate = d3.timeParse("%m-%d-%Y");
 
        	data.forEach(function (d) {
            		d.date = parseDate(d.day);
        	});

		var transform='translate(' + margin.left + ',' + margin.top + ')';
		
		var x = d3.scaleTime()
            		.domain(d3.extent(data, function (d) {
                	return d.date;
           		 }))
            		.rangeRound([0, w]);	

		var y = d3.scaleLinear()
            		.domain([0,d3.max(data,function(d){
                	return d.count+100;
            		})])
            		.range([h, 0]);
 
	        var line = d3.line()
        	        .x(function(d) { return x(d.date); })
    			.y(function(d) { return y(d.count); });

		var xAxis = d3.axisBottom(x).tickFormat(function(d){ return d.x;});
		var yAxis = d3.axisLeft(y);
 
		var yGrid = d3.axisLeft(y)
   			.scale(y)
   			.ticks(5)
   			.tickSize(-w, 0, 0)
   			.tickFormat("");
		console.log(data);	
		return <svg className="line-chart" width={this.state.width} height={this.props.height}>
    				<g transform={transform}>
       		 		<Grid h={h} grid={yGrid} gridType="y"/>
       		 		<Axis h={h} axis={yAxis} axisType="y" />
        			<Axis h={h} axis={xAxis} axisType="x"/>
	        		<path className="line shadow" d={line(data)} strokeLinecap="round"/>
 		   	</g>
			</svg>	
	}
}

LineChart.defaultProps = {
		width: 800,
		height: 300,
		margins: {top: 5, right: 5, bottom: 5, left: 5}
}


class Axis extends React.Component {
	constructor(props) {
		super(props);
		this.renderAxis = this.renderAxis.bind(this);
	}

	renderAxis() {
		var node = ReactDOM.findDOMNode(this);
		d3.select(node).call(this.props.axis);
	}
	
	componenetDidUpdate() {
		this.renderAxis()
	}
	
	componenetDidMount() {
		this.renderAxis()
	}

	render() {
		var translate = `translate(0,${this.props.h})`;
		return <g> className="axis" transform={this.props.axisType=='x'?translate:""} </g>
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
	
	componenetDidUpdate() {
		this.renderGrid()
	}
	
	componenetDidMount() {
		this.renderGrid()
	}

	render() {
		var translate = `translate(0,${this.props.h})`;
		return <g> className="y-grid" transform={this.props.gridType=='x'?translate:""} </g>
	}	
}

class Dots extends React.Component {

}
