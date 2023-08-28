import { ReactNode } from 'react';
import { Navigation } from '../../../components/navigation/Navigation';
import styles from './Header.module.css';
import { getToken } from '../../../ecommerceAPI/getToken';
import { getProducts } from '../../../ecommerceAPI/getProducts';
export default function Header() {
  return (
    <header className={styles.header}>
      <Navigation />
      <button
        type="button"
        onClick={async () => {
          const token = await getToken();
          const { access_token } = await token.json();
          await getProducts(access_token);
        }}
      >
        Downloads
      </button>
    </header>
  );
}
