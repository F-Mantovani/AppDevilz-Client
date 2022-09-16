import React from 'react';
import { FormInput } from './FormInput';
import useFormInput from '../../controllers/useForms';
import { useAuthFunctions } from '../../controllers/useAuthFunctions';
import styled from 'styled-components'

const h3S = styled.h3`
	background-color: red
`

export const LoginForm = () => {
	const { state, handleInput } = useFormInput();
	const { handleLogin, error } = useAuthFunctions()

	return (
		<div>
			<h3S>Login Form</h3S>
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
