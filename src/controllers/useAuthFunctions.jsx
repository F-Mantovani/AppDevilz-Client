import { useState } from 'react';
import authConnect from '../utils/authConnect';
import { saveToken } from './saveToken';

export const useAuthFunctions = () => {
	const [error, setError] = useState('');

	const handleLogin = async ({ email, password }) => {
		const user = {
			email,
			password,
		};

		try {
			checkUserInputs(user);

			const data = await authConnect.logIn(user);

			saveToken(data);
		} catch (error) {
			console.log(error);
		}
	};

	const checkUserInputs = user => {
		setError('')
		if (!user.email || !user.password) {
			setError(prevError => ({ ...prevError, errorMessage: 'Please fill all the required fields ' }));
			if (!user.email) {
				setError(prevError => ({ ...prevError, email: 'Please provide a valid email' }));
			}
			if (!user.password) {
				setError(prevError => ({ ...prevError, password: 'Please provide the password' }));
			}
			throw new Error('Validating user Input');
		}
	};

	return { handleLogin, error };
};
