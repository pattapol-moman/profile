import { observable, computed, action } from 'mobx'

class MenuStore {
	@observable menu = [
		{ title: 'About' , index: 0},
		{ title: 'Experience' , index: 1},
		{ title: 'Portfolio' , index: 2},
		{ title: 'Contact' , index: 3},
	]

	@observable activeIndex = JSON.parse(window.localStorage.getItem("activeTabIndex") || 0)

	@observable indexStore = JSON.parse(0)

	@action
	changeTab = Index => {
		window.localStorage.setItem("activeTabIndex", JSON.stringify(Index))
		if(Index !== this.activeIndex){
			if(Index > this.activeIndex){
				this.indexStore = 1;
			}else{
				this.indexStore = 2;
			}
		}
		this.activeIndex = Index;
	};


	@computed
	get getMenu() {
		return this.menu;
	}

	@computed
	get getIndexStore() {
		return this.indexStore;
	}

	@computed
	get currentActiveIndex() {
		return this.activeIndex;
	}
}

export default new MenuStore()
