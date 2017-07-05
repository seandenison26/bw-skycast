import React from 'react';
import './ViewWindow.css';
import Welcome from './Welcome/Welcome';

export default class ViewWindow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            view: <Welcome />
        }
    
    	this.updateView = this.updateView.bind(this);
    }
    
    updateView(view) {
        this.setState({view: view})
    }
    
    render() {
        return <div className="view-window col-md-10 col-md-offset-1">{this.state.view}</div>
    }
}

