import styles from './ProductCard.module.css';
import { Link } from 'react-router-dom';

// interface productDataObject {
//   product: {};
// }

export function ProductCard({ product }: any) {
  let catList: any = [];
  for (let i in product.masterData.current.categories) {
    catList.push(product.masterData.current.categories[i].id);
  }
  const productDataObject = {
    name: `${product.masterData.current.name.en}`,
    imageURL: `${product.masterData.current.masterVariant.images[0].url}`,
    price: `${product.masterData.current.masterVariant.prices[2].value.centAmount / 100}`,
    productId: '',
    brand: '',
    color: '',
    size: '',
    description: 'bla-bla-bla',
    categorie: catList.join('/ '),
    currency: 'USD',
    discount: '-10%',
  };
  const attributList = product.masterData.current.masterVariant.attributes;

  for (let i in attributList) {
    if (attributList[i].name === 'color') {
      productDataObject.color = attributList[i].value.label.en;
    }
    if (attributList[i].name === 'size') {
      productDataObject.size = attributList[i].value;
    }
    if (attributList[i].name === 'designer') {
      productDataObject.brand = attributList[i].value.label;
    }
  }

  const cartHandler = () => {
    console.log('добавить товар в корзину');
  };
  return (
    <Link className={styles.link} to="/productItem">
      <div className={styles.container}>
        <h2 className={styles.title}>{productDataObject.name}</h2>
        <div className={styles.topWrapper}>
          <span className={styles.topProps}>{`Brand: ${productDataObject.brand}`}</span>
          <span className={styles.topProps}>{`Size: ${productDataObject.size}`}</span>
        </div>
        <div className={styles.imgContainer}>
          <img src={productDataObject.imageURL} alt="фото товара" className={styles.imgCard}></img>
          <span className={styles.discount}>{productDataObject.discount}</span>
        </div>
        <h2 className={styles.price}>{`${productDataObject.price} ${productDataObject.currency}`}</h2>
        <ul className={styles.optionsList}>
          <li className={styles.options}>{`Color: ${productDataObject.color}`}</li>
          <li className={styles.options}>{`Cat: ${productDataObject.categorie}`}</li>
        </ul>
        <Link className={styles.link} to="/basket">
          <button className={styles.btn} onClick={cartHandler}>
            add to <img className={styles.iconsvg} src="/cart.svg" alt="cart" />
          </button>
        </Link>
      </div>
    </Link>
  );
}
