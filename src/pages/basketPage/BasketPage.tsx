import styles from './BasketPage.module.css';
import { Link } from 'react-router-dom';
import { iLineItem } from '../../components/interface/iLineItem';
import { LineItem } from '../../components/lineItem/LineItem';
import { BasketContext } from '../../context/basketContext/BasketContext';
import { useContext } from 'react';

export function BasketPage() {
  const { basket } = useContext(BasketContext);
  console.log('basket', basket);
  const total = {
    centAmount: basket.totalPrice.centAmount,
    currencyCode: basket.totalPrice.currencyCode,
    quantity: basket.totalLineItemQuantity,
  };
  const basketList = basket.lineItems;

  return basketList.length === 0 ? (
    <div className={styles.basket}>
      <div className={styles.empty}>
        <h2 className={styles.title__empty}>Your cart is empty</h2>
        <p className={styles.p__empty}>Please add an item to checkout</p>
        <Link className={styles.link} to="/products">
          <button
            className={styles.button__empty}
            onClick={() => {
              console.log('добавить генерацию продукт пейдж в очередной раз');
            }}
          >
            Go to catalog
          </button>
        </Link>
      </div>
    </div>
  ) : (
    <div className={styles.basketFull}>
      <div className={styles.topContainer}>
        <h2 className={styles.title__full}>
          Total amount: {total.centAmount / 100} {total.currencyCode}
        </h2>
        <h2 className={styles.title__full}>Total quantity: {total.quantity} pcs</h2>
      </div>
      <div className={styles.itemListContainer}>
        {basketList.map(item => {
          const { productId } = item;
          return <LineItem lineItem={item} key={productId} />;
        })}
      </div>
      <button className={styles.buttonClear}>Clear Basket</button>
    </div>
  );
}
