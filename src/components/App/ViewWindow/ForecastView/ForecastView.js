import React from 'react';
import './ForecastView.css';
import CurrentForecast from './CurrentForecast/CurrentForecast'
import ForecastDetail from './ForecastDetail/ForecastDetail'
//import ForecastDayTab from './ForecastDayTab/ForecastDayTab'



export default class ForecastView extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			currentDetail: <ForecastDetail details={this.props.forecastData.daily.data[1]}/>	
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
		return	<div className="forecast-view">
				<CurrentForecast currently={this.props.forecastData.currently} />
				{this.state.currentDetail}
			</div>
	
	}
}	
