import { observable, computed, action, runInAction } from 'mobx'

class ProfileStore {
	@observable isFetch = true
	@observable about = null
	@observable contact = null
	@observable exp = []
	@observable portfolio = []
	@observable skills = []

	@action
	findProfile = async () => {
		this.isFetch = true
		try {
			const response = await fetch(`https://us-central1-profile-8b357.cloudfunctions.net/portfolio`).then(res => res.json())
			runInAction('entities fetched', () => {
				this.about = response.about
				this.contact = response.contact
				this.exp = response.exp
				this.portfolio = response.portfolio
				this.skills = response.skills
				this.isFetch = false
			});
		} catch (err) {
			this.about = null
			this.contact = []
			this.exp = []
			this.portfolio = []
			this.skills = []
		}
	}

	@computed
	get getIsFetch() {
		return this.isFetch;
	}

	@computed
	get getAbout() {
		return this.about;
	}

	@computed
	get getContact() {
		return this.contact;
	}

	@computed
	get getExp() {
		return this.exp;
	}

	@computed
	get getSkills() {
		return this.skills;
	}

	@computed
	get getPortfolio() {
		return this.portfolio;
	}
}

export default new ProfileStore()
