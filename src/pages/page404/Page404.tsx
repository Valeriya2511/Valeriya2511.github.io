import { Link } from 'react-router-dom';
import styles from './Page404.module.css';

export function Page404() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1text}>404</h1>
      <p> Page not found</p>
      <img className={styles.img404} src="./404.jpg" alt="image404" />
    </div>
  );
}
