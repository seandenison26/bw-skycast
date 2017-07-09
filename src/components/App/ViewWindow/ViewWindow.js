import React from 'react';
import './ViewWindow.css';
import Welcome from './Welcome/Welcome';
import LocationBar from './LocationBar/LocationBar';
import ForecastView from './ForecastView/ForecastView';
import HistoryView from './HistoryView/HistoryView';
import NavBar from './NavBar/NavBar';
import SearchBar from './SearchBar/SearchBar';
//import WeatherIcons from "../../../images/weather-icons" 

const Logo = () => <h1>SKYCAST</h1>;

export default class ViewWindow extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			view: <Welcome />,
		}
    
    		this.updateView = this.updateView.bind(this);
		this.getForecastView = this.getForecastView.bind(this); 
		this.getHistoryView = this.getHistoryView.bind(this); 
		this.getContactView = this.getContactView.bind(this); 
		this.getAboutView = this.getAboutView.bind(this); 
    	
	}

	updateView(v) {
		this.setState({view: v})
	}

	getForecastView() {
		if(Object.keys(this.props.forecastData).length === 0 && this.props.forecastData.constructor === Object) {
			this.updateView(<Welcome />);
		}
		else {
			this.updateView(<ForecastView forecastData={this.props.forecastData}/>);	
		}
	}

	getHistoryView() {
		if(Object.keys(this.props.locationData).length === 0 && this.props.locationData.constructor === Object) {
			this.updateView(<Welcome />);
		}
		
		else {
			this.updateView(<HistoryView handleSearch={this.props.handleHistorySearch} historyData={this.props.historyData}/>);	
		}
	}

	getAboutView() {

	}

	getContactView() {

	}
	
	componentWillReceiveProps(nextProps) {
	}	
	
	componentDidUpdate(prevProps, prevState) {
		if(this.props.historyData !== prevProps.historyData && prevState.view.type === HistoryView) {
			this.getHistoryView();	
		}
		
		if(this.props.forecastData !== prevProps.forecastData) {
			this.getForecastView();
		}
		
	}
			

	
    render() {
        return 	<div>
			<div className="header">
		    		<Logo className="col-md-4"/>
		    		<SearchBar className="col-md-4 col-offset-2" handleSearch={this.props.handleLocationSearch}/>
		    	</div>
		    	
		    	<div className="view-window col-md-10 col-md-offset-1 .container">
		 	 <NavBar 
	   			className= "col-md-4 col-offset-2"  
		    		handleForecastClick={this.getForecastView}
		    		handleHistoryClick={this.getHistoryView}
		    	/>
	
		    	<LocationBar 
		    			location={this.props.locationData}
		    		/>   
				{this.state.view}
			</div>
    		</div>
    }
}

