import styles from './LineItem.module.css';
import { iLineItem } from '../interface/iLineItem';
import { removeLineItem } from '../../ecommerceAPI/removeLineItem';
import { queryCartsData } from '../../ecommerceAPI/queryCartsData';
import { BasketContext } from '../../context/basketContext/BasketContext';
import { useContext } from 'react';
import { addLineItem } from '../../ecommerceAPI/addLineItem';

export function LineItem({ lineItem, numer }: any) {
  const { setBasket } = useContext(BasketContext);
  const image = lineItem.variant.images[0].url;
  const pricePiece = lineItem.price.value.centAmount;
  const currencyItem = lineItem.price.value.currencyCode;
  const name = lineItem.name.en;
  const altTextImg = lineItem.productSlug.en;
  const quantity = lineItem.quantity;
  const totalItemPriceCent = lineItem.totalPrice.centAmount;

  const minusItem = async () => {
    const userToken = await localStorage.getItem('userToken');
    if (userToken) {
      const dataCarts = await queryCartsData(userToken);
      const quantityItem: number = 1;
      const newBasket = await removeLineItem(
        userToken,
        dataCarts.results[0].id,
        lineItem.id,
        dataCarts.results[0].version,
        quantityItem,
      );
      setBasket(newBasket);
      // await removeLineItem(token, cartId, LineID, version);
    }
  };
  const plusItem = async () => {
    const userToken = localStorage.getItem('userToken');
    const dataCarts = await queryCartsData(`${userToken}`);
    const newBasket = await addLineItem(
      `${userToken}`,
      dataCarts.results[0].id,
      lineItem.productId,
      dataCarts.results[0].version,
    );
    setBasket(newBasket);
  };
  const removeItem = async () => {
    const userToken = await localStorage.getItem('userToken');
    if (userToken) {
      const dataCarts = await queryCartsData(userToken);
      const newBasket = await removeLineItem(
        userToken,
        dataCarts.results[0].id,
        lineItem.id,
        dataCarts.results[0].version,
        quantity,
      );
      setBasket(newBasket);
    }
  };

  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemNumerDeleteContainer}>
        <span className={styles.itemNumerContainer}>{`${numer + 1}`}</span>
        <button className={styles.itemButton} onClick={removeItem}>
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
          <button className={styles.itemButton} onClick={minusItem}>
            -
          </button>
          <button className={styles.itemButton} onClick={plusItem}>
            +
          </button>
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
