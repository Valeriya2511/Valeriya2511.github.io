import styles from './LineItem.module.css';
import { iLineItem } from '../interface/iLineItem';

export function LineItem({ lineItem }: any) {
  const image = lineItem.variant.images[0].url;
  const pricePiece = lineItem.price.value.centAmount;
  const currencyItem = lineItem.price.value.currencyCode;
  const name = lineItem.name.en;
  const altTextImg = lineItem.productSlug.en;
  const quantity = lineItem.quantity;
  const totalItemPriceCent = lineItem.totalPrice.centAmount;
  // console.log('lineItem', lineItem);
  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemNumerDeleteContainer}>
        <span className={styles.itemNumerContainer}>10</span>
        <button className={styles.itemButton}>
          <img className={styles.iconsvg} src="./delete.svg" alt="remove" />
        </button>
      </div>
      <div className={styles.itemImageContainer}>
        <img className={styles.itemImage} src={image} alt={altTextImg} />
      </div>
      <div className={styles.itemTitleContainer}>{name}</div>
      <div className={styles.itemControlContainer}>
        <div className={styles.itemQuantityContainer}>{quantity} pcs</div>
        <div className={styles.itemPlusMinusContainer}>
          <button className={styles.itemButton}>-</button>
          <button className={styles.itemButton}>+</button>
        </div>
        <div className={styles.itemPriceContainer}>
          {pricePiece / 100} {currencyItem}
        </div>
        <div className={styles.itemTotalPriceContainer}>
          {totalItemPriceCent / 100} {currencyItem}
        </div>
      </div>
    </div>
  );
}
