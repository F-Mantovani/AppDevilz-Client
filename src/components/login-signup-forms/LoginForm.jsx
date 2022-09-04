import React from 'react';
import { FormInput } from './FormInput';
import useFormInput from '../../controllers/useForms';
import { useAuthFunctions } from '../../controllers/useAuthFunctions';

export const LoginForm = () => {
	const { state, handleInput } = useFormInput();
	const { handleLogin, error } = useAuthFunctions()

	return (
		<div>
			<h3>Login Form</h3>
				{error ? <p> {error.errorMessage} </p> : null}
				<FormInput
					input='email'
					label='Email:'
					type='email'
					error={error}
					value={state}
					onChange={handleInput}
				/>
				<FormInput
					input='password'
					label='Senha:'
					type='password'
					error={error}
					value={state}
					onChange={handleInput}
				/>
				<button onClick={() => handleLogin(state)}> Login </button>
		</div>
	);
};
