import React, { Component } from 'react';
import { MenuTabContainer, MenuText, TextSpan } from './header.style'
import { inject, observer } from 'mobx-react'

@inject('menu_store')
@observer
class MenuTab extends Component {
	render() {

		const { menu_store } = this.props
		return (
			<MenuTabContainer>
				{
					menu_store.getMenu.map((menu) => {
						return (
							<MenuText key={`${menu.index}-${menu.title}`} active={menu_store.currentActiveIndex === menu.index} onClick={() => menu_store.changeTab(menu.index)}>
								<TextSpan>{menu.title}</TextSpan>
							</MenuText>
						)
					})
				}
			</MenuTabContainer>
		);
	}
}

MenuTab.defaultProps = {};

export default MenuTab;
