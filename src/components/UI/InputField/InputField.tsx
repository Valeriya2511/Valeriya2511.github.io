import { useState } from 'react';
import styles from './InputField.module.css';

export interface InputFieldProps {
  type: string;
  name: string;
  placeholder: string;
}

export default function InputField({ type, name, placeholder }: InputFieldProps) {
  const [value, setValue] = useState('');
  function autoFill(event: React.FocusEvent<HTMLInputElement>) {
    if (type === 'email') {
      setValue(`${localStorage.key(0)}`);
    }
    if (type === 'password') {
      setValue(`${localStorage.getItem(String(localStorage.key(0)))}`);
    }
  }
  function validate(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value.trim());

    if (type === 'email') {
      if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/u.test(value)) {
        event.currentTarget.setCustomValidity('I am expecting an e-mail address!');
        event.target.value = '';
      }
      if (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/u.test(value)) {
        event.currentTarget.setCustomValidity('');
        setValue(event.target.value.trim());
      }
    }
    if (type === 'password') {
      if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{7,}$/u.test(value)) {
        event.currentTarget.setCustomValidity(
          `Password must contain min legth 8 charcter and one: 
           uppercase and lowercase letter, digit, special character, 
           not contain leading or trailing whitespace
          `,
        );
        event.target.value = '';
      }
      if (/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{7,}$/u.test(value)) {
        event.currentTarget.setCustomValidity('');
        setValue(event.target.value.trim());
      }
    }
  }
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={styles.inputField}
        required={true}
        value={value}
        onFocus={autoFill}
        onChange={validate}
      />
    </>
  );
}
