import { useState } from 'react';
import { IPRODUCT } from '../../models';
import styles from './Product.module.css';

interface ProductProps {
  product: IPRODUCT;
}

export function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false);
  const buttonBgClasses = details ? 'bg-blue-400' : 'bg-yellow-400';
  const buttonClasses = ['py-2 px-4 border', buttonBgClasses];
  return (
    <div className={styles.productItem}>
      <h3 className='text-center'>Product: {product.title}</h3>
      <button className={buttonClasses.join(' ')} onClick={() => setDetails((prev) => !prev)}>
        {details ? 'Hide' : 'Show more'}
      </button>
      {details ? (
        <div>
          <p>Description: {product.description}</p>
        </div>
      ) : null}
      <p className='w-full'>Price: {product.price}</p>
      <span style={{ width: '100%' }}>Rate: {product?.rating?.rate}</span>
      <img className={styles.img} src={product.image} alt={product.title} />
    </div>
  );
}
