import React, { useState } from 'react';
import { useProducts } from '../../hooks/products';
import { Product } from '../../components/product/Product';
import { Error } from '../../components/error/Error';
import { Loading } from '../../components/loading/Loading';
import { Modal } from '../../components/modal/Modal';
import { CreateProduct } from '../../components/createProduct/CreateProduct';
import { IPRODUCT } from '../../models';
import { ProductCard } from '../../components/productCard/ProductCard';
import styles from './ProductsPage.module.css';

export function ProductsPage() {
  return (
    <div className={styles.container}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}
