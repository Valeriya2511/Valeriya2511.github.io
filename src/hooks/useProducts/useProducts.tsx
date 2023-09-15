import { useContext } from 'react';
import { IRowProduct } from '../../components/interface/IRowProduct';
import { getCategories } from '../../ecommerceAPI/getCategories';
import { getProducts } from '../../ecommerceAPI/getProducts';
import { ProductsContext } from '../../context/productsContext/productsContext';
import { CategoriesContext } from '../../context/categoriesContext/CategoriesContext';

export function useProducts() {
  const { setProducts } = useContext(ProductsContext);
  const { setCategories } = useContext(CategoriesContext);
  const loadProducts = async () => {
    const token = await localStorage.getItem('access_token');
    const productData = await getProducts(`${token}`);
    const product = await productData.json();
    const productList: IRowProduct[] = product.results;
    setProducts(productList);
    const categoriesData = await getCategories(`${token}`);
    setCategories(categoriesData);
  };
  return { loadProducts };
}
