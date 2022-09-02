import axios from 'axios';
import { useState } from 'react';

const useFormInput = () => {
	const [state, setState] = useState('');
	const [error, setError] = useState('');
	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleInput = e => {
		const { value, name } = e.target;
		setState(prevState => ({ ...prevState, [name]: value }));
	};

	const handleLogin = async e => {
		e.preventDefault();
		const user = {
			name: state.name,
			email: state.email,
			password: state.password,
		};
		try {
			checkUserInputs(user);
			const res = await axios.post('http://localhost:9000/auth/login', user);
			console.log(res.data);
		} catch (error) {
			console.log(error)
		}
	};

	const checkUserInputs = user => {
		if (user.email === undefined || user.password === undefined) {
			setError(prevError => ({ ...prevError, errorMessage: 'Please fill all the information ' }));
			if (user.email === undefined) {
				setError(prevError => ({ ...prevError, email: 'Please provide a valid email' }));
			}
			if (user.password === undefined) {
				setError(prevError => ({ ...prevError, password: 'Please provide the password' }));
			}
		}
		throw new Error('Validating user Input');
	};

	return {
		state,
		handleInput,
		handleLogin,
		error,
		success,
		loading,
	};
};

export default useFormInput;
