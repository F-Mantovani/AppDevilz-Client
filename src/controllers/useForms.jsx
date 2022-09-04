import { useState } from 'react';

const useFormInput = () => {
	const [state, setState] = useState('');
	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleInput = e => {
		const { value, name } = e.target;
		setState(prevState => ({ ...prevState, [name]: value }));
	};



	return {
		state,
		handleInput,
		success,
		loading,
	};
};

export default useFormInput;
