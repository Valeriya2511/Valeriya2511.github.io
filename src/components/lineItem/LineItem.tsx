import styles from './LineItem.module.css';
import { iLineItem } from '../interface/iLineItem';

export function LineItem(lineItem: any) {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemNumerDeleteContainer}>
        <span className={styles.itemNumerContainer}>10</span>
        <button className={styles.itemButton}>
          <img className={styles.iconsvg} src="./delete.svg" alt="remove" />
        </button>
      </div>
      <div className={styles.itemImageContainer}>
        <img className={styles.itemImage} src={lineItem.images} alt={lineItem.productSlug} />
      </div>
      <div className={styles.itemTitleContainer}>{lineItem.name}</div>
      <div className={styles.itemControlContainer}>
        <div className={styles.itemQuantityContainer}>{lineItem.quantity} pcs</div>
        <div className={styles.itemPlusMinusContainer}>
          <button className={styles.itemButton}>-</button>
          <button className={styles.itemButton}>+</button>
        </div>
        <div className={styles.itemPriceContainer}>
          {lineItem.priceCent / 100} {lineItem.currencyCode}
        </div>
        <div className={styles.itemTotalPriceContainer}>
          {lineItem.totalItemPriceCent / 100} {lineItem.currencyCode}
        </div>
      </div>
    </div>
  );
}
