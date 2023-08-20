import { useState } from 'react';
import styles from './ButtonAutorization.module.css';
// onClick?: (event: React.FormEvent) => void;
interface IButtonAutorizationProps {
  type: 'button' | 'submit';
  children: string;
}
// function submitHandler(event: React.FormEvent): () => {} {
//   event.preventDefault();
//   const formData = new FormData(document.forms[0]);
//   const login = formData.get('email');
//   const password = formData.get('password');
//   const userData = Object.fromEntries([[login, password]]);
//   return userData;
// }
export default function ButtonAutorization({ type, children }: IButtonAutorizationProps) {
  return (
    <button className={styles.buttonAutorization} type={type}>
      {children}
    </button>
  );
}
