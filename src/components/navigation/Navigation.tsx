import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

export function Navigation() {
  return (
    <nav className={styles.navigation}>
      <p>Navigation: </p>
      <Link className={styles.productItem} to={'/'}>
        MainPage
      </Link>
      <Link className="" to={'/about'}>
        About
      </Link>
      <Link to={'/autorization'}>Autorization</Link>
      <Link to={'/registration'}>RegistrationPage</Link>
      <Link to={'/products'}>products</Link>
      <Link to={'/productItem1111'}>productItem1111</Link>
      <Link to={'/user'}>user</Link>
      <Link to={'/basket'}>basket</Link>
    </nav>
  );
}
