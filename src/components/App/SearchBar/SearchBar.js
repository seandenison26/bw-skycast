import React from 'react';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            value: ""
        }
        
    }
    
    onSubmit() {
        
    }
    
    render() {
        return <form className="location-search">
            <input type="text" name="location" value="Search Location"/>
            <input type="submit" name="search-button" value="Search"/>
        </form>
    }
}

