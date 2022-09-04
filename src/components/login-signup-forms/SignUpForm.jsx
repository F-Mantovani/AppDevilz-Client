import React from 'react';
import { FormInput } from './FormInput';
import useFormInput from '../../controllers/useForms';
import { useAuthFunctions } from '../../controllers/useAuthFunctions';

export const SignUpForm = () => {
	const { state, handleInput } = useFormInput();
	const { handleSignUp, error } = useAuthFunctions()

	return (
		<div>
			<h3>SignUp Form</h3>
				{error ? <p> {error.errorMessage} </p> : null}    
				<FormInput
					input='username'
					label='Nome:'
					type='text'
					error={error}
					value={state}
					onChange={handleInput}
				/>
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
				<button onClick={() => handleSignUp(state)}> Login </button>
		</div>
	);
};