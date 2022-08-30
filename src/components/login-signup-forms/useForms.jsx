import axios from 'axios';
import { useState } from 'react';

const useFormInput = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [nameMessage, setNameMessage] = useState(null);
	const [emailMessage, setEmailMessage] = useState(null);
	const [passwordMessage, setPasswordMessage] = useState(null);
	const [message, setMessage] = useState(null);
	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleNameInput = ({ value }) => {
		setName(value);
	};
	const handleEmailInput = ({ value }) => {
		setEmail(value);
	};
	const handlePasswordInput = ({ value }) => {
		setPassword(value);
	};

  const handleLogin = async () => {
    const user = {
      name,
      email,
      password
    }
    const res = await axios.post('http://localhost:9000/auth/login', user)
    console.log(res.data)
  }



	return {
		name,
		handleNameInput,
		email,
		handleEmailInput,
		password,
		handlePasswordInput,
    handleLogin,
		nameMessage,
		emailMessage,
		passwordMessage,
		message,
		success,
		loading,
	};
};

export default useFormInput;
