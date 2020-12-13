import styles from './TextField.module.scss';

function TextField(props) {

	const {
		label,
		name,
		type,
		value,
		placeholder,
		onChangeHandler,
		errorMessage
	} = props;

	const getFieldLabel = () => {
		if (label) {
			return <label className={styles.fieldLabel} htmlFor={name}>{label}</label>
		}
	}

	const displayError = () => {
		if (errorMessage) {
			return <p className={styles.errorMessage}>{errorMessage}</p>
		}
	}

	return (
		<div className={styles.wrapper}>
			{getFieldLabel()}
			<input
				className={styles.inputField}
				type={type ? type : 'text'}
				name={name}
				value={value}
				placeholder={placeholder}
				autoComplete="off"
				onChange={onChangeHandler}
			/>
			{displayError()}
		</div>
	)
}

export default TextField;