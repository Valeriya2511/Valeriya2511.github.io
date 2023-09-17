import { createContext } from 'react';

export interface IBasketContext {
  basketList: [];
  setBasketList: (basketList: []) => void;
}
export const BasketContext = createContext({
  basketList: [],
  setBasketList: (basketList: []) => {},
});
