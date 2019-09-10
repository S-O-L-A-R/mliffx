import { action, computed, observable, runInAction } from 'mobx'

export enum STATE {
	initialized,
	loading,
	fetched,
}

export type FetchMethod<T> = (...args: any) => T | Promise<T>

class DataStore<T> {
	@observable
	private state: STATE = STATE.initialized

	@observable
	private data: T

	private fetchMethod: FetchMethod<T>

	constructor(fetchMethod: FetchMethod<T>) {
		this.fetchMethod = fetchMethod
	}

	@action
	public async fetch() {
		const data = await this.fetchMethod()
		runInAction(() => {
			this.data = data
		})
	}

	@computed
	public get value() {
		return {
			data: this.data,
			fetched: this.state === STATE.fetched,
			loading: this.state === STATE.loading,
		}
	}
}

export default DataStore
