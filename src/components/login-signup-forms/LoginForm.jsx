import React from 'react';
import { FormInput } from './FormInput';
import useFormInput from './useForms';

export const LoginForm = () => {
	const { state, handleInput, handleLogin, error } = useFormInput();

	return (
		<div>
			<h3>Login Form</h3>
			<form onSubmit={(e) => handleLogin(e)}>
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
					label='Password:'
					type='password'
					error={error}
					value={state}
					onChange={handleInput}
				/>
				<button type='submit'> Login </button>
			</form>
		</div>
	);
};
