import React from 'react';
import styles from './SignLoginPage.module.css';
import { useAutorization } from '../../hooks/useAutorization/useAutorization';
import ButtonTypeAutorization from '../../components/UI/ButtonTypeAutorization/ButtonTypeAutorization';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function SignLoginPage() {
  const { login, changeLoginHandler, changeSignUpHandler } = useAutorization();

  return (
    <section className={styles.autorizationPage}>
      <div className={styles.autorizationWrapper}>
        <div>
          <ButtonTypeAutorization children="Sign Up" onClick={changeSignUpHandler} />
          <ButtonTypeAutorization children="Log In" onClick={changeLoginHandler} />
        </div>
        <h1>{login ? 'Login In' : 'Sign Up'}</h1>
        <div>{login ? <LoginForm /> : <SignUpForm />}</div>
      </div>
    </section>
  );
}
