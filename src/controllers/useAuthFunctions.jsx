import { useState } from 'react';
import authConnect from '../utils/authConnect';
import { saveToken } from './saveToken';

export const useAuthFunctions = () => {
	const [error, setError] = useState('');
	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(false);

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

	const handleSignUp = async ({ username, email, password }) => {
		const user = { name: username, email, password };

		try {
			checkUserInputs(user);

			await authConnect.signUp(user);

			setSuccess('Usuário criado com sucesso');

			await handleLogin(user);

			console.log('usuario criado');
		} catch (error) {
			console.log(error);
		}
	};

	const checkUserInputs = (user) => {
		setError('');
		if (!('name' in user)) {
			user.name = 1
		}

		if (!user.email || !user.password || !user.name) {
			setError(prevError => ({
				...prevError,
				errorMessage: 'Preencha todos os campos obrigatórios',
			}));
			if (!user.email) {
				setError(prevError => ({
					...prevError,
					email: 'Por favor preencha o email',
				}));
			}
			if (!user.password) {
				setError(prevError => ({
					...prevError,
					password: 'Por favor preencha a senha',
				}));
			}
			if (!user.name) {
				setError(prevError => ({
					...prevError,
					username: 'Por favor preencha o nome',
				}));
			}
			throw new Error('Validating user Input');
		}
	};

	return { handleLogin, handleSignUp, error, success, loading };
};
