import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { FadeDiv, FadeInputOverDelayDiv } from '../animation/animation.style';
import {
	ContactContainer, ContactEmail, ContactGithub, ContactPhone, PhoneIphoneIcon, TextLinkGithub,
} from './contact.style';


@inject('profile_store', 'menu_store')
@observer
class Contact extends Component {

	handleClick(web) {
		let win = window.open(web, '_blank');
		win.focus();
	}

	render() {
		const { contact } = this.props.profile_store
		const { menu_store } = this.props
		// console.log(menu_store.activeIndex)
		// console.log(menu_store.indexStore)
		// console.log(menu_store.currentActiveIndex)
		return (
			<FadeDiv checkIndex={menu_store.getIndexStore}>
				<FadeInputOverDelayDiv>
					<ContactContainer>
						<ContactEmail>Email : {contact.email}</ContactEmail>
						<ContactGithub>Github : <TextLinkGithub onClick={this.handleClick.bind(this, contact.github)}>Go to My GitHub</TextLinkGithub></ContactGithub>
						<ContactPhone>Phone : <PhoneIphoneIcon/>{contact.mobile}</ContactPhone>
					</ContactContainer>
				</FadeInputOverDelayDiv>
			</FadeDiv>
		);
	}
}

Contact.defaultProps = {};

export default Contact;
