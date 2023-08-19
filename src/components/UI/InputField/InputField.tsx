import { useState } from 'react';
import styles from './InputField.module.css';

export interface InputFieldProps {
  type: string;
  name: string;
  placeholder: string;
}

export default function InputField({ type, name, placeholder }: InputFieldProps) {
  const [value, setValue] = useState('');
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={styles.inputField}
      required={true}
      value={value}
      onChange={event => {
        setValue(event.target.value);
      }}
    />
  );
}
