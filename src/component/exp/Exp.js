import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { FadeDiv, FadeInputOverDelayDiv } from '../animation/animation.style';
import { ExpContainer, ExpData } from './exp.style';


@inject('profile_store', 'menu_store')
@observer
class Exp extends Component {

	render() {
		const { exp } = this.props.profile_store
		const { menu_store } = this.props
		console.log(exp[ 0 ].id)
		// console.log(menu_store.activeIndex)
		// console.log(menu_store.indexStore)
		// console.log(menu_store.currentActiveIndex)
		return (
			<FadeDiv checkIndex={menu_store.getIndexStore}>
				<ExpContainer>
					<FadeInputOverDelayDiv>
						<img src="https://res.cloudinary.com/dbz2jvlxv/image/upload/v1530259878/9pi_logo.png"
						     alt="9pilogo" width="200px" height="200px"/>
					</FadeInputOverDelayDiv>
					{
						Object.keys(exp).map((num) => {
							return (
								<ExpData key={`${exp[ num ].id}-${exp[ num ].text}`}>
									{exp[ num ].text}
								</ExpData>
							)
						})
					}
				</ExpContainer>
			</FadeDiv>
		);
	}
}

Exp.defaultProps = {};

export default Exp;
