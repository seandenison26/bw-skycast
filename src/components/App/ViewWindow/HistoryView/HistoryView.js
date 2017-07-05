import React from 'react';
import './HistoryView.css';

export default class HistoryView extends React.Component {
	render() {
		return 	<div className="history-view">
				{JSON.stringify(this.props.historyData)}
			</div>
	}
}
