import { useState } from 'react'
import styles from './BasicForm.module.scss';
import TextField from './TextField';
import Display from './Display'

const INITIAL_FORM_STATE = {
	firstname: '',
	lastname: '',
	email: ''
}

function BasicForm() {
	const [formState, setFormState] = useState(INITIAL_FORM_STATE);

	const handleFormSubmit = (e) => {
		e.preventDefault();
		// alert('Form submit not implemented.')
	}

	const handleInputChange = (e) => {
		const { name, value } = e.target;

		setFormState(() => {
			return {
				...formState,
				[name]: value
			}
		})
	}

	const resetForm = () => {
		setFormState(INITIAL_FORM_STATE);
	}

	return (
		<div className={styles.mainComponentWrapper}>
			<form onSubmit={handleFormSubmit} className={styles.form}>
				<h1 className={styles.sectionTitle}>Basic Form</h1>

				<TextField label="Firstname" name="firstname" value={formState.firstname} onChangeHandler={handleInputChange} />
				<TextField label="Lastname" name="lastname" value={formState.lastname} onChangeHandler={handleInputChange} />
				<TextField label="Email" name="email" value={formState.email} type="email" onChangeHandler={handleInputChange} />

				<button type="submit" className={`${styles.button} ${styles.submit}`}>Submit</button>
				<button type="reset" className={`${styles.button} ${styles.reset}`} onClick={resetForm}>Reset</button>
			</form>

			<Display data={formState} />
		</div>
	)
}



export default BasicForm;
