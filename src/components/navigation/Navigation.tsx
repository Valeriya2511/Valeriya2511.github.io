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
          <Link to="/main">Main</Link>
          <Link to="/products">Catalog</Link>
          <Link to="/about">About</Link>

          <Link to="/UserPage">
            <img className={styles.userImg} src="./user-auth.jpg" alt="user" />
          </Link>
          <Link to="/">Logout</Link>
        </>
      ) : (
        <>
          <Link to="/">Login</Link>
          <Link to="/main">Main</Link>
          <Link to="/registration">SignUp</Link>
        </>
      )}
    </nav>
  );
}
