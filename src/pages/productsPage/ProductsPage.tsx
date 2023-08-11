import React, { useState } from 'react';
import { useProducts } from '../../hooks/products';
import { Product } from '../../components/product/Product';
import { Error } from '../../components/error/Error';
import { Loading } from '../../components/loading/Loading';
import { Modal } from '../../components/modal/Modal';
import { CreateProduct } from '../../components/createProduct/CreateProduct';
import { IPRODUCT } from '../../models';
export function ProductsPage() {
  const { products, error, load, addProduct } = useProducts();
  const [modal, setModal] = useState(false);

  const createHandler = (product: IPRODUCT) => {
    setModal(false);
    addProduct(product);
  };
  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      <h1 className='text-center text-2xl mb-4'>Some title</h1>

      {load && <Loading />}
      {error && <Error error={error} />}

      <div className='productList flex flex-wrap gap-4 justify-center'>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
      {modal && (
        <Modal title={'Create new product'} onClose={() => setModal(false)}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}
      <button
        type='button'
        className='py-2 px-4 border bg-green-400 block mx-auto hover:bg-gray-400'
        onClick={() => setModal(true)}
      >
        Show modal window
      </button>
    </div>
  );
}
