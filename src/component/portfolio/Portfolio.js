import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { FadeDiv, FadeInputOverDelayDiv } from '../animation/animation.style';
import { BuildIcon, DescriptionIcon, PortContainer, PortData, PortDes, PortName, PortTools } from './port.style';



@inject('profile_store' , 'menu_store')
@observer
class Portfolio extends Component {

	render() {
		const { portfolio } = this.props.profile_store
		const { menu_store } = this.props
		// console.log(menu_store.activeIndex)
		// console.log(menu_store.indexStore)
		// console.log(menu_store.currentActiveIndex)
		return (
			<FadeDiv checkIndex={menu_store.getIndexStore}>
				<FadeInputOverDelayDiv>
					<PortContainer>
						{
							Object.keys(portfolio).map((port) =>{
								return (
									<PortData key={`${portfolio[port].id}-${portfolio[port].title}`}>
										<PortName>{portfolio[port].title}</PortName>
										<PortDes><DescriptionIcon/>{`Description: ${portfolio[port].des}`}</PortDes>
										<PortTools><BuildIcon/>{`Tools: ${portfolio[port].tools}`}</PortTools>
									</PortData>
								)
							})
						}
					</PortContainer>
				</FadeInputOverDelayDiv>
			</FadeDiv  >
		);
	}
}

Portfolio.defaultProps = {};

export default Portfolio;
