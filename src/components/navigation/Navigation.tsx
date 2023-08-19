import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';
import { privatRoutesList, publicRoutesList } from '../router/Router';

export function Navigation() {
  const isAuth: boolean = true;
  return (
    <nav className={styles.navigation}>
      {isAuth
        ? privatRoutesList.map(ob => (
          <Link className={styles.link} to={ob.path}>
            {ob.page}
          </Link>
        ))
        : publicRoutesList.map(ob => (
          <Link className={styles.link} to={ob.path}>
            {ob.page}
          </Link>
        ))}
    </nav>
  );
}
