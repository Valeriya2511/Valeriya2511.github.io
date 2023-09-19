import { createContext } from 'react';
import { IRowProduct } from '../../components/interface/IRowProduct';
export interface IProdContext {
  products: [] | IRowProduct[];
  setProducts: (products: [] | IRowProduct[]) => any;
}

export const ProductsContext = createContext<IProdContext>({
  products: [],
  setProducts: () => {
    return [];
  },
});
