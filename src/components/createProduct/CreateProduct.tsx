import { useState } from 'react';
import { IPRODUCT } from '../../models';
import { Error } from '../error/Error';
import axios from 'axios';

interface CreateProductProps {
  onCreate: (product: IPRODUCT) => void;
}

export function CreateProduct({ onCreate }: CreateProductProps) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const createProductData: IPRODUCT = {
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
      rate: 8.1,
      count: 122,
    },
  };

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');

    if (value.trim().length === 0) {
      setError('Enter valid title');
      return;
    }

    createProductData.title = value;
    const responseData = await axios.post<IPRODUCT>('https://fakestoreapi.com/products', createProductData);
    onCreate(responseData.data);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type='text'
        className='border py-2 px-4 mb-2 w-full'
        placeholder='Enter product title'
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <input className='border py-2 px-4 mb-2 w-full' type='password' placeholder='Enter product email' />
      {error && <Error error={error} />}
      <button type='submit' className='py-2 px-4 border bg-yellow-400 hover:bg-gray-400'>
        Create
      </button>
    </form>
  );
}
