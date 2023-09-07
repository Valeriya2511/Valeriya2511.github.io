import { createContext } from 'react';
export interface IProdContext {
  products: [];
  setProducts: (products: []) => void;
}
export const ProductsContext = createContext({
  products: [],
  setProducts: (products: []) => {},
});
