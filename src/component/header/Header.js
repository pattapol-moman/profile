import React, { Component } from 'react';
import { Container } from './header.style'
import MenuTab from './MenuTab';



class Header extends Component {
	render() {
		return (
			<Container>
				<MenuTab/>
			</Container>
		);
	}
}

Header.defaultProps = {};

export default Header;
