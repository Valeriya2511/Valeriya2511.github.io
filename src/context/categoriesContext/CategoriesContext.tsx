import { createContext } from 'react';

export interface ICatContext {
  categories: [];
  setCategories: (categories: []) => void;
}
export const CategoriesContext = createContext({
  categories: [],
  setCategories: (categories: []) => {},
});
