import styles from './BasketPage.module.css';
import { Link } from 'react-router-dom';
import { iLineItem } from '../../components/interface/iLineItem';
import { LineItem } from '../../components/lineItem/LineItem';
import { BasketContext } from '../../context/basketContext/BasketContext';
import { useContext } from 'react';
import { deleteBasket } from '../../ecommerceAPI/deleteBasket';
import { createCart } from '../../ecommerceAPI/createCart';
import { getBasketData } from '../../ecommerceAPI/getBasketData';
import { useProducts } from '../../hooks/useProducts/useProducts';

export function BasketPage() {
  const { basket, setBasket } = useContext(BasketContext);
  // console.log('basket', basket);
  const customerId = basket.customerId;
  const cartVersion = basket.version;
  const total = {
    centAmount: basket.totalPrice.centAmount,
    currencyCode: basket.totalPrice.currencyCode,
    quantity: basket.totalLineItemQuantity,
  };
  const basketList = basket.lineItems;
  const cleaningBasket = async () => {
    const userToken = localStorage.getItem('userToken');
    const idBasket = basket.id;

    if (userToken) {
      await deleteBasket(userToken, idBasket, cartVersion);
      await createCart(userToken);
      const newBasket = await getBasketData(userToken, customerId);
      setBasket(newBasket);
    }
  };
  const { loadProducts } = useProducts();

  return basketList.length === 0 ? (
    <div className={styles.basket}>
      <div className={styles.empty}>
        <h2 className={styles.title__empty}>Your cart is empty</h2>
        <p className={styles.p__empty}>Please add an item to checkout</p>
        <Link className={styles.link} to="/products">
          <button
            className={styles.button__empty}
            onClick={async () => {
              await loadProducts();
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
        {basketList.map((item, index) => {
          const { productId } = item;
          return <LineItem lineItem={item} key={productId} numer={index} />;
        })}
      </div>
      <button className={styles.buttonClear} onClick={cleaningBasket}>
        Clear Basket
      </button>
    </div>
  );
}
