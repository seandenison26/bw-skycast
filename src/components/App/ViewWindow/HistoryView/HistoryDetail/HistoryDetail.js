import React from 'react';
import './HistoryDetail.css';

export default class HistoryDetail extends React.Component {
	render() {
		return 	<div className="history-detail col-md-2">
				<p>{this.props.details.summary}</p>
				
			</div>
	}
}
