import { useState } from 'react';

const useFormInput = () => {
	const [state, setState] = useState('');

	const handleInput = e => {
		const { value, name } = e.target;
		setState(prevState => ({ ...prevState, [name]: value }));
	};



	return {
		state,
		handleInput,
	};
};

export default useFormInput;
