import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { FadeDiv, FadeInputOverDelayDiv } from '../animation/animation.style';
import { SkillContainer, SkillData } from './skill.style';
import { Line } from 'rc-progress';


@inject('profile_store', 'menu_store')
@observer
class Skill extends Component {

	render() {
		const { skills } = this.props.profile_store
		const { menu_store } = this.props
		// console.log(menu_store.activeIndex)
		// console.log(menu_store.indexStore)
		// console.log(menu_store.currentActiveIndex)
		return (
			<FadeDiv checkIndex={menu_store.getIndexStore}>
				<SkillContainer>
					<FadeInputOverDelayDiv>
						{
							Object.keys(skills).map((num) => {
								return (
									<SkillData key={`${skills[ num ].id}-${skills[ num ].text}`}>
										{skills[ num ].text}
										<Line percent={skills[ num ].level} strokeWidth="0.5" strokeColor={skills[ num ].color} />
									</SkillData>
								)
							})
						}
					</FadeInputOverDelayDiv>
				</SkillContainer>
			</FadeDiv>
		);
	}
}

Skill.defaultProps = {};

export default Skill;
