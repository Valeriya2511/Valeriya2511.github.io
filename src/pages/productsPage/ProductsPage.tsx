import { useContext, useEffect } from 'react';
import { ProductCard } from '../../components/productCard/ProductCard';
import styles from './ProductsPage.module.css';
import { ProductsContext } from '../../context/productsContext/productsContext';
import { Sidebar } from '../../components/sidebar/Sidebar';

export function ProductsPage() {
  const { products } = useContext(ProductsContext);
  // useEffect(() => {}, products);
  return (
    <div className={styles.container}>
      <div className={styles.sidebarColumn}>
        <Sidebar />
      </div>
      <div className={styles.productsColumn}>
        {products.length &&
          products.map((element, index) => {
            const { id } = element;
            return <ProductCard product={element} key={id} />;
          })}
      </div>
    </div>
  );
}
