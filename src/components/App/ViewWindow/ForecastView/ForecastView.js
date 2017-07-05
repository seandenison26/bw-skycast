import React from 'react';
import './ForecastView.css';
import CurrentForecast from './CurrentForecast/CurrentForecast'
import ForecastDetail from './ForecastDetail/ForecastDetail'
import ForecastDayTab from './ForecastDayTab/ForecastDayTab'



export default class ForecastView extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			currentDetail: <ForecastDetail details={this.props.forecastData.daily.data[1]}/>	
		}
		this.updateForecastDetail = this.updateForecastDetail.bind(this);
		this.createTabsFromJSON = this.createTabsFromJSON.bind(this);
	}
	
	createTabsFromJSON(dailyArray) {
		let tabs = dailyArray.map((data) => <ForecastDayTab details={data} handleTabClick={this.updateForecastDetail} />)
		return tabs;
	}
	/*
	 *<AlertBar />
	 *<CurrentForecast />
	 *<ForecastDetail />
	 *<ForecastDayTabs />
	 */ 
	
	updateForecastDetail(detailData) {
		this.setState({currentDetail: <ForecastDetail details={detailData}/> })	
	}
	
	render() {
		return	<div className="forecast-view">
				<div className="row">
					<CurrentForecast currently={this.props.forecastData.currently} />
					{this.state.currentDetail}
				</div>	
				<div className="row">
					{this.createTabsFromJSON(this.props.forecastData.daily.data.slice(1,this.props.forecastData.daily.length))}
				</div>
			</div>
	
	}
}	
