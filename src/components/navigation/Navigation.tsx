import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';
import { privatRoutesList, publicRoutesList } from '../router/RoutsList';

export function Navigation() {
  const isAuth: boolean = true;
  return (
    <nav className={styles.navigation}>
      {isAuth
        ? privatRoutesList.map((ob, index) => (
          <Link className={styles.link} to={ob.path} key={index}>
            {ob.page}
          </Link>
        ))
        : publicRoutesList.map((ob, index) => (
          <Link className={styles.link} to={ob.path} key={index}>
            {ob.page}
          </Link>
        ))}
    </nav>
  );
}
