import React from 'react';
import './ViewWindow.css';
import Welcome from './Welcome/Welcome';
import LocationBar from './LocationBar/LocationBar';
import ForecastView from './ForecastView/ForecastView';

export default class ViewWindow extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			view: <Welcome />,
		}
    
    		this.updateView = this.updateView.bind(this);
    	}
    
	updateView(v) {
		this.setState({view: v})
	}

	componentWillReceiveProps(nextProps) {
	}	
	
	componentDidUpdate(prevProps, prevState) {
		if(Object.keys(this.props.locationData).length === 0 && this.props.locationData.constructor === Object) {
			this.updateView(<Welcome />);
		}
		else if (prevProps.forecastData !== this.props.forecastData){
			this.updateView(<ForecastView forecastData={this.props.forecastData}/>)
		}
			
	}
	
    render() {
        return 	<div className="view-window col-md-10 col-md-offset-1 .container-fluid">
		 	<LocationBar 
		    		location={this.props.locationData}
		    	/>   
			{this.state.view}
		</div>
    }
}

