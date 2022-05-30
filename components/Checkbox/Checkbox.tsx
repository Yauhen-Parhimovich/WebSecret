import React from 'react';
import {CheckboxProps} from './Checkbox.props';

import styles from './Checkbox.module.css';

const Checkbox: React.FC<CheckboxProps> = ({title, ...props}): JSX.Element => {
	return (
		<label className={styles['checkbox']}>
			<input className={styles['checkbox__real']} type="checkbox" {...props}/>
			<span className={styles['checkbox__fake']}></span>
			<span className={styles['checkbox__title']}>{title}</span>
		</label>
	);
};

export default Checkbox;
