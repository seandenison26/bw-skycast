import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ViewWindow from './ViewWindow/ViewWindow';
import './App.css';

const Title = () => <h1>SKYCAST</h1>;

class App extends Component {
    constructor() {
        super()
        this.state = {
            location: {},
            forecast: {},
            history: {}
        }
        
    }
    
    render() {
        return  <div className="App .container">
                    <Title />
		    <SearchBar />
		    <ViewWindow />
                </div>
    }
}

export default App;
