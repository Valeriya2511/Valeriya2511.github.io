import { getProductData } from '../../ecommerceAPI/GetProductData';
import { getToken } from '../../ecommerceAPI/getToken';
export function MainPage() {
  getProductData();
  return <div>MainPage</div>;
}
