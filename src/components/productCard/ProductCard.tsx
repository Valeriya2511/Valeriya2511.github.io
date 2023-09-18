import styles from './ProductCard.module.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CategoriesContext } from '../../context/categoriesContext/CategoriesContext';
import { Category } from '../sidebar/Sidebar';
import { queryCartsData } from '../../ecommerceAPI/queryCartsData';
import { addLineItem } from '../../ecommerceAPI/addLineItem';
import { BasketContext } from '../../context/basketContext/BasketContext';

export function ProductCard({ product }: any) {
  const { categories } = useContext(CategoriesContext);
  const categoriesArray: Category[] = categories;
  const catList: string[] = [];
  for (const cat of product.masterData.current.categories) {
    const res: Category | undefined = categoriesArray.find(el => el.id === cat.id);
    if (res) {
      catList.push(res.name.en);
    }
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
    currency: 'EUR',
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
  const { setBasket } = useContext(BasketContext);
  const cartHandler = async () => {
    const userToken = localStorage.getItem('userToken');
    const dataCarts = await queryCartsData(`${userToken}`);
    const newBasket = await addLineItem(
      `${userToken}`,
      dataCarts.results[0].id,
      product.id,
      dataCarts.results[0].version,
    );
    setBasket(newBasket);
    // console.log('newBasket', newBasket);
  };
  return (
    <Link className={styles.link} to="/products">
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
        {/* <Link className={styles.link} to="/basket"> */}
        <button className={styles.btn} onClick={cartHandler}>
          add to <img className={styles.iconsvg} src="/cart.svg" alt="cart" />
        </button>
        {/* </Link> */}
      </div>
    </Link>
  );
}
