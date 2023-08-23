import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';
import { AuthContext } from '../../context/authContext/AuthContext';

export function Navigation() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const changeAuth = (isAuth: boolean) => {
    isAuth ? setIsAuth(false) : setIsAuth(true);
  };
  return (
    <nav className={styles.navigation}>
      <button onClick={() => changeAuth(isAuth)}>isAuth</button>
      {isAuth ? (
        <>
          <Link className={styles.link} to="/main">
            Main
          </Link>
          <Link className={styles.link} to="/products">
            Catalog
          </Link>
          <Link className={styles.link} to="/about">
            About
          </Link>
          <Link className={styles.link} to="/basket">
            Basket
          </Link>
          <Link className={styles.link} to="/UserPage">
            <img className={styles.userImg} src="./user-auth.jpg" alt="user" />
          </Link>
          <Link className={styles.link} to="/">
            Logout
          </Link>
        </>
      ) : (
        <>
          <Link className={styles.link} to="/">
            Login
          </Link>
          <Link className={styles.link} to="/main">
            Main
          </Link>
          <Link className={styles.link} to="/registration">
            SignUp
          </Link>
        </>
      )}
    </nav>
  );
}
