import React from 'react';
import './NavBar.css';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

export default class NavBar extends React.Component {
	render() {
		return 	<Navbar className="navbar">
				<Nav>
					<NavItem onClick={this.props.handleForecastClick}>Forecast</NavItem>
					<NavItem onClick={this.props.handleHistoryClick}>History</NavItem>
					<NavItem>About</NavItem>
					<NavItem>Contact</NavItem>
				</Nav>
			</Navbar>
	}
}
