import { useEffect, useState } from 'react';
import styles from './InputField.module.css';

export interface InputFieldProps {
  type: string;
  name: string;
  placeholder: string;
  isDisabled: (prev: boolean) => void;
}

export default function InputField({ type, name, placeholder, isDisabled }: InputFieldProps) {
  const [value, setValue] = useState('');
  const [info, setInfo] = useState('');
  useEffect(() => {
    //console.log(value);
  }, [value, info]);
  function validate(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value.trim());
    isDisabled(true);
    if (type === 'email') {
      if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]$/.test(value)) {
        setValue(event.target.value.trim());
        setInfo('Email address must be properly formatted (e.g., user@example.com).');
      } else {
        setValue(event.target.value.trim());
        setInfo('');
      }
    }
    if (type === 'password') {
      if (!/([a-z][A-Z])|([A-Z][a-z])/.test(value)) {
        setValue(event.target.value.trim());
        setInfo(`Password must contain at least one uppercase/lowercase letter (A-Z)/(a-z);
        `);
      } else {
        setValue(event.target.value.trim());
        setInfo('');
        if (!/[0-9]/.test(value)) {
          setValue(event.target.value.trim());
          setInfo('Password must contain at least one digit (0-9).');
        } else {
          setValue(event.target.value.trim());
          setInfo('');
          if (!/[!@#$%^&*]/.test(value)) {
            setValue(event.target.value.trim());
            setInfo('Password must contain at least one special character (e.g., !@#$%^&*).');
          } else {
            setValue(event.target.value.trim());
            setInfo('');
            if (value.length <= 6) {
              setValue(event.target.value.trim());
              setInfo('Password must be at least 8 characters long.');
            } else {
              setValue(event.target.value.trim());
              setInfo('');
              isDisabled(false);
            }
          }
        }
      }
    }
  }
  function autoFill(event: React.FocusEvent<HTMLInputElement>) {
    if (localStorage.getItem('email') !== null) {
      if (type === 'email') {
        setValue(`${localStorage.getItem('email')}`);
      }
      if (type === 'password') {
        setValue(`${localStorage.getItem('password')}`);
        isDisabled(false);
      }
    }
  }

  return (
    <label>
      {info}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={styles.inputField}
        required={true}
        value={value}
        onFocus={autoFill}
        onInput={validate}
        onChange={validate}
      />
    </label>
  );
}
