import {InputHTMLAttributes, memo} from 'react';

import styles from './text_field.module.scss';

const TextFieldComponent = (props: InputHTMLAttributes<HTMLInputElement>) => (
  <input className={styles.text_field} {...props} />
);

export const TextField = memo(TextFieldComponent);
