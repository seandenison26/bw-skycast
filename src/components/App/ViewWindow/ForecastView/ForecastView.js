import React from 'react';
import './ForecastView.css';
import CurrentForecast from './CurrentForecast/CurrentForecast'


export default class ForecastView extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			currentDetail: {}	
		}
		this.updateForecastDetail = this.updateForecastDetail.bind(this);
		this.createTabsFromJSON = this.createTabsFromJSON.bind(this);
	}
	
	createTabsFromJSON(dayArray) {

	}
	/*
	 *<AlertBar />
	 *<CurrentForecast />
	 *<ForecastDetail />
	 *<ForecastDayTabs />
	 */ 
	updateForecastDetail(id) {
		this.setState({currentDetail: id})	
	}


	render() {
		return 	<div className="forecast-view">
				<CurrentForecast currently={this.props.forecastData.currently} />
			</div>
	}
}	
