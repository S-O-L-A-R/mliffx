import { Profile } from '@line/bot-sdk'
import { action, observable, runInAction } from 'mobx'
import DataStore from './DataStore'

class MLIFFXStore {
	@observable
	public userProfile: DataStore<Profile>

	@observable
	public accessToken: DataStore<string>

	@observable
	private error: Error

	@observable
	private isInit: boolean = false

	@action
	public init() {
		liff.init(
			() => {
				runInAction(() => {
					this.isInit = true
				})
			},
			(error: Error) => {
				runInAction(() => {
					this.error = error
				})
			},
		)
	}

	@action
	public getProfile() {
		this.userProfile = new DataStore<Profile>(liff.getProfile)
		this.userProfile.fetch()
	}

	@action
	public async getAccessToken() {
		this.accessToken = new DataStore<string>(liff.getAccessToken)
		this.accessToken.fetch()
	}
}

export default new MLIFFXStore()
