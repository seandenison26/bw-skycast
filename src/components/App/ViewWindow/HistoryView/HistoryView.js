import React from 'react';
import './HistoryView.css';
import HistoryDetail from './HistoryDetail/HistoryDetail';

export default class HistoryView extends React.Component {
	render() {
		return 	<div className="history-view">
				<HistoryDetail details={this.props.historyData.daily.data[0]}/>
			</div>
	}
}
