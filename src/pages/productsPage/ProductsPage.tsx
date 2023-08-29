import { useEffect, useState } from 'react';
import { useProducts } from '../../hooks/products';
import { Product } from '../../components/product/Product';
import { Error } from '../../components/error/Error';
import { Loading } from '../../components/loading/Loading';
import { Modal } from '../../components/modal/Modal';
import { CreateProduct } from '../../components/createProduct/CreateProduct';
import { IPRODUCT } from '../../models';
import { ProductCard } from '../../components/productCard/ProductCard';
import styles from './ProductsPage.module.css';
import { getToken } from '../../ecommerceAPI/getToken';
import { getProducts } from '../../ecommerceAPI/getProducts';

export function ProductsPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    console.log(products);
  }, [products]);
  return (
    <div className={styles.container}>
      <div style={{ width: '100%', textAlign: 'center', padding: '20px' }}>
        <button
          type="button"
          onClick={async () => {
            const token = await getToken();
            const { access_token } = await token.json();
            const productData = await getProducts(access_token);
            const product = await productData.json();
            setProducts(product.results);
          }}
        >
          Show products
        </button>
      </div>
      {products.length &&
        products.map(({ id }) => {
          return <ProductCard key={id} />;
        })}

      {/* <ProductCard />
      <ProductCard /> */}
    </div>
  );
}
