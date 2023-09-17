import { createContext } from 'react';

export const BasketContext = createContext({
  basket: {
    id: '',
    totalPrice: { centAmount: 0, currencyCode: 'EUR' },
    totalLineItemQuantity: 0,
    lineItems: [],
  },
  setBasket: (basket: {
    id: '';
    totalPrice: { centAmount: 0; currencyCode: 'EUR' };
    totalLineItemQuantity: 0;
    lineItems: [];
  }) => {},
});
