import { useContext, useEffect, useState } from 'react';
import { ProductCard } from '../../components/productCard/ProductCard';
import styles from './ProductsPage.module.css';
import { ProductsContext } from '../../context/productsContext/productsContext';
import { CategoriesContext } from '../../context/categoriesContext/CategoriesContext';
import { Sidebar } from '../../components/sidebar/Sidebar';
import Pagination from '../../components/pagination/Pagination';
import { Loading } from '../../components/loading/Loading';

export function ProductsPage() {
  const [count, setCount] = useState(3);
  const { products } = useContext(ProductsContext);
  const { categories } = useContext(CategoriesContext);
  useEffect(() => {
    //console.log(products);
  }, [products]);
  return (
    <div className={styles.container}>
      <div className={styles.sidebarColumn}>
        <Sidebar />
      </div>
      <div className={styles.productsColumn}>
        {products.length ? (
          products.map((element, index) => {
            const { id } = element;
            if (index <= count) {
              return <ProductCard product={element} key={id} />;
            }
          })
        ) : categories.length ? (
          <img src="./SoldOut.jpg" alt="Sold Out"></img>
        ) : (
          <Loading />
        )}
      </div>
      <Pagination countItem={count} onClick={setCount} />
    </div>
  );
}
