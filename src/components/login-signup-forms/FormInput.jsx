export const FormInput = ({ input, label, type, value, onChange, required, error }) => {
	return (
		<div>
			<label htmlFor={input}> {label} </label>
			<input
				id={input}
				name={input}
				type={type}
				value={value?.name}
				onChange={e => {
					onChange(e);
				}}
				required={required}
			/>
			{error?.[input] ? <p> {error[input]} </p> : null}
		</div>
	);
};
