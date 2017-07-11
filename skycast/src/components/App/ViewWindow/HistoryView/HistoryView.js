import React from 'react';
import './HistoryView.css';
import HistoryDateForm from './HistoryDateForm/HistoryDateForm';
import HistoryDetail from './HistoryDetail/HistoryDetail';
import GraphDisplay from './GraphDisplay/GraphDisplay';



export default class HistoryView extends React.Component {
	
	render() {
		return 	<div className="history-view">
				<HistoryDateForm handleSearch={this.props.handleSearch} searchDate={new Date(this.props.historyData.daily.data[0].time * 1000)}/>	
				
				<div className="row">
					<HistoryDetail details={this.props.historyData.daily.data[0]}/>
					<GraphDisplay data={this.props.historyData.hourly.data}/>
				</div>
			</div>
	}
}
