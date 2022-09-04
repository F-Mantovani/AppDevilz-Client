import { connectConstructor } from './axios.constructor';

class authConnect extends connectConstructor {
	constructor() {
		super('auth');
	}

	signUp = async credentials => {
		try {
			const { data } = await this.api.post('/signup', credentials);
      console.log(data)
			return data;
		} catch (error) {
			throw error.response.data;
		}
	};

	logIn = async credentials => {
		try {
			const { data } = await this.api.post('/login', credentials);

			return data;
		} catch (error) {
			throw error.response.data;
		}
	};
}

export default new authConnect()
