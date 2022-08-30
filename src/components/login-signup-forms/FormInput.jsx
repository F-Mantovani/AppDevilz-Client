export const FormInput = ({input, label, type, value, onChange }) => {

return (
    <div>
      <label htmlFor={input}> {label} </label>
      <input id={input} type={type} value={value} onChange={(e) => onChange(e.target)} />
    </div>
  )
}