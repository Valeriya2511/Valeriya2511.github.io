import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';
import { AuthContext } from '../../context/authContext/AuthContext';

export function Navigation() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  return (
    <nav className={styles.navigation}>
      <button onClick={() => setIsAuth(true)}>isAuth</button>
      {isAuth ? (
        <>
          <Link to="/main">Main</Link>
          <Link to="/products">Catalog</Link>
          <Link to="/about">About</Link>
          <Link to="/basket">Basket</Link>
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
