import React from 'react';
import './ViewWindow.css'

export default class ViewWindow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            view: "place holder element"
        }
    }
    
    updateView(view) {
        this.setState({view: view})
    }
    
    render() {
        return <div className="view-window col-md-10 col-md-offset-1">{this.state.view}</div>
    }
}

