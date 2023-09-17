import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';
import { AuthContext } from '../../context/authContext/AuthContext';
import { useProducts } from '../../hooks/useProducts/useProducts';
import { BasketContext } from '../../context/basketContext/BasketContext';

export function Navigation() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const { loadProducts } = useProducts();
  const { basket } = useContext(BasketContext);
  const quantity = basket.totalLineItemQuantity;
  return (
    <nav className={styles.navigation}>
      {isAuth ? (
        <>
          <Link className={styles.link} to="/main">
            Main
          </Link>
          <Link onClick={async () => await loadProducts()} className={styles.link} to="/products">
            Catalog
          </Link>
          <Link className={styles.link} to="/about">
            About
          </Link>
          <Link className={styles.linkIcon} to="/basket">
            <div className={styles.imgCont}>
              <img className={styles.iconsvg} src="/cart.svg" alt="basket" />
              <div className={styles.products}>{quantity}</div>
            </div>
          </Link>
          <Link className={styles.linkIcon} to="/UserPage">
            <div className={styles.imgCont}>
              <img className={styles.iconsvg} src="./user-auth.svg" alt="user" />
            </div>
          </Link>
          <Link className={styles.linkIcon} to="/" onClick={() => setIsAuth(false)}>
            <div className={styles.imgCont}>
              <img className={styles.iconsvg} src="/logout.svg" alt="" />
            </div>
          </Link>
        </>
      ) : (
        <>
          <Link className={styles.link} to="/">
            Login/Sign Up
          </Link>
          <Link className={styles.link} to="/main">
            Main
          </Link>
        </>
      )}
    </nav>
  );
}
