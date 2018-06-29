import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import { inject, observer } from 'mobx-react';

import About from '../component/about/About';
import Header from '../component/header/Header';
import Exp from '../component/exp/Exp';
import Portfolio from '../component/portfolio/Portfolio';
import Contact from '../component/contact/Contact';
import Skill from '../component/skill/Skill';


@inject('profile_store', 'menu_store')
@observer
class Profile extends Component {

	componentDidMount() {
		this.props.profile_store.findProfile()
	}

	showDiv = () => {
		const { menu_store } = this.props

		switch (menu_store.activeIndex) {
			case 0:
				return <About/>
			case 1:
				return <Exp/>
			case 2:
				return <Skill/>
			case 3:
				return <Portfolio/>
			case 4:
				return <Contact/>
			default:
				return <Profile/>
		}
	}

	render() {
		console.log(this.props.profile_store)
		return (
			<Container>
				{
					this.props.profile_store.isFetch ?
						<div>Load</div>
						:
						<div>
							<Header/>
							{this.showDiv()}
						</div>
				}
			</Container>
		);
	}
}

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Quattrocento+Sans');
	body {
		background: #faf8f6;
		color: #1a1a1a;
		font-family: 'Quattrocento Sans', sans-serif;
		//font-family: 'Encode Sans Condensed', sans-serif;
		//font-family: 'Bookman', cursive;
		//font-family: 'Poiret One', cursive;
	}
`;

const Container = styled.div`
		display: flex;
	flex-direction: column;
	font-size: 1.15em;
	//min-height: 100vh;
	margin: 1% 13% 3% 13%;
	flex: 1;
`

Profile.defaultProps = {};

export default Profile;
