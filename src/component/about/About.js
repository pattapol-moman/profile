import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { FadeDiv, FadeInputDiv, FadeInputOver2DelayDiv } from '../animation/animation.style';
import { AboutContainer, Age, Degree, Gpa, Name, NickName, Uni, Words } from './about.style';


@inject('profile_store' , 'menu_store')
@observer
class About extends Component {

	render() {
		const { about } = this.props.profile_store
		const { menu_store } = this.props
		console.log(about)
		// console.log(menu_store.activeIndex)
		// console.log(menu_store.indexStore)
		// console.log(menu_store.currentActiveIndex)
		return (
			<FadeDiv checkIndex={menu_store.getIndexStore}>
				<AboutContainer>
					<FadeInputOver2DelayDiv>
						<Words>{about.words}</Words>
					</FadeInputOver2DelayDiv>
					<img src={about.image_url} alt="pattapol" width="200px" height="200px"/>
					<FadeInputDiv>
						<Name>{about.name}</Name>

						<NickName>Nickname {about.nickName}</NickName>
						<Age>{about.age}</Age>
						<Degree>{about.degree}</Degree>
						<Gpa>GPA {about.gpa}</Gpa>
						<Uni>{about.uni}</Uni>
					</FadeInputDiv>
				</AboutContainer>
			</FadeDiv  >
		);
	}
}

About.defaultProps = {};

export default About;
