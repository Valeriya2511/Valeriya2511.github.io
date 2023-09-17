import styles from './BasketPage.module.css';
import { Link } from 'react-router-dom';
import { iLineItem } from '../../components/interface/iLineItem';
import { LineItem } from '../../components/lineItem/LineItem';
import { BasketContext } from '../../context/basketContext/BasketContext';
import { useContext } from 'react';

export function BasketPage() {
  const { basketList } = useContext(BasketContext);
  const basketList2: iLineItem[] = [
    {
      name: 'Sneakers “Jazz“ Saucony light grey ',
      priceCent: 11875,
      currencyCode: 'EUR',
      productId: '5d24a816-9155-4af5-b020-2d7e91a4db1d',
      productSlug: 'saucony-sneakers-jazz-S2044320-lightgrey',
      quantity: 7,
      totalItemPriceCent: 83125,
      images: 'https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079984_1_large.jpg',
    },
    {
      name: 'Sneakers “Jazz“ Saucony light grey',
      priceCent: 11875,
      currencyCode: 'EUR',
      productId: '5d24a816-9155-4af5-b020-2d7e91a4db1d2',
      productSlug: 'saucony-sneakers-jazz-S2044320-lightgrey',
      quantity: 7,
      totalItemPriceCent: 83125,
      images: 'https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079984_1_large.jpg',
    },
  ];
  const total = { centAmount: 3083125, currencyCode: 'EUR', quantity: 2 };

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
