import styles from './Display.module.scss';
import TextField from './TextField';

function Display(props) {
	const { data } = props;

	return(
		<div className={styles.component}>
			&#123;<ul className={styles.formState}>
				{
					Object.keys(data).map((key) => {
						return (
							<li key={key}>
								&emsp;"{key}": {data[key]}
							</li>
						)
					})
				}
			</ul>&#125;
			<TextField />
		</div>
	)
}

export default Display;