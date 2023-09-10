import { useContext, useEffect, useState } from 'react';
import { ProductCard } from '../../components/productCard/ProductCard';
import styles from './ProductsPage.module.css';
import { ProductsContext } from '../../context/productsContext/productsContext';
import { Sidebar } from '../../components/sidebar/Sidebar';
import Pagination from '../../components/pagination/Pagination';

export function ProductsPage() {
  const [count, setCount] = useState(3);
  const { products } = useContext(ProductsContext);
  useEffect(() => {
    //console.log(products);
  }, [products]);
  return (
    <div className={styles.container}>
      <div className={styles.sidebarColumn}>
        <Sidebar />
      </div>
      <div className={styles.productsColumn}>
        {products.length &&
          products.map((element, index) => {
            const { id } = element;
            if (index <= count) {
              return <ProductCard product={element} key={id} />;
            }
          })}
      </div>
      <Pagination countItem={count} onClick={setCount} />
    </div>
  );
}
