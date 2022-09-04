export const saveToken = ({ token }) => {
	if (!localStorage.getItem('token')) {
		localStorage.setItem('token', token);
	}

	return;
};
