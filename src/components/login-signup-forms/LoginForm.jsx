import React from 'react';
import { FormInput } from './FormInput';
import useFormInput from './useForms';

export const LoginForm = () => {
	const {email, handleEmailInput, password, handlePasswordInput, handleLogin } =
		useFormInput();

	return (
		<div>
			<h3>Login Form</h3>
			<FormInput
				input='email'
				label='Email:'
				type='text'
				value={email}
				onChange={handleEmailInput}
			/>
			<FormInput
				input='password'
				label='Password:'
				type='password'
				value={password}
				onChange={handlePasswordInput}
			/>
      <button onClick={handleLogin}> Login </button>
		</div>
	);
};
