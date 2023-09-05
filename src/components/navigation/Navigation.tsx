import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';
import { AuthContext } from '../../context/authContext/AuthContext';
import { getToken } from '../../ecommerceAPI/getToken';
import { getProducts } from '../../ecommerceAPI/getProducts';
import { ProductsContext } from '../../context/productsContext/productsContext';
import { CategoriesContext } from '../../context/categoriesContext/CategoriesContext';
import { getCategories } from '../../ecommerceAPI/getCategories';

export function Navigation() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const { setProducts } = useContext(ProductsContext);
  const { setCategories } = useContext(CategoriesContext);

  return (
    <nav className={styles.navigation}>
      {isAuth ? (
        <>
          <Link className={styles.link} to="/main">
            Main
          </Link>
          <Link
            onClick={async () => {
              const token = await getToken();
              const { access_token } = await token.json();
              const productData = await getProducts(access_token);
              const product = await productData.json();
              setProducts(await product.results);
              const categoriesData = await getCategories(access_token);
              setCategories(categoriesData);
            }}
            className={styles.link}
            to="/products"
          >
            Catalog
          </Link>
          <Link className={styles.link} to="/about">
            About
          </Link>
          <Link className={styles.linkIcon} to="/basket">
            <div className={styles.imgCont}>
              <img className={styles.iconsvg} src="/cart.svg" alt="basket" />
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
