import { createContext } from 'react';

export const BasketContext = createContext({
  basket: {
    id: '',
    totalPrice: { centAmount: 0, currencyCode: 'EUR' },
    totalLineItemQuantity: 0,
    lineItems: [],
    customerId: '',
    version: 1,
  },
  setBasket: (basket: {
    id: '';
    totalPrice: { centAmount: 0; currencyCode: 'EUR' };
    totalLineItemQuantity: 0;
    lineItems: [];
    customerId: '';
    version: 1;
  }) => {},
});
