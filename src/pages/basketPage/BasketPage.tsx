import styles from './BasketPage.module.css'
import { Link } from 'react-router-dom';

export function BasketPage() {
  return (
  <div className={styles.basket}>
    <div className={ styles.empty}>
      <h2 className={ styles.title__empty}>Your basket is empty</h2>
      <p className={styles.p__empty}>Please add an item to checkout</p>
      <Link className={styles.link} to="/products">
        <button className={styles.button__empty}>Go to catalog</button>
      </Link>
    </div>
  </div>)
}
